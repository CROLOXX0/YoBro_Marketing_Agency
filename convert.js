const fs = require('fs');
const path = require('path');

const screens = [
    { name: 'pricing', path: 'pricing/page.tsx' },
    { name: 'portfolio', path: 'portfolio/page.tsx' },
    { name: 'faq', path: 'faq/page.tsx' },
    { name: 'social-media', path: 'services/social-media/page.tsx' },
    { name: 'reel-editing', path: 'services/reel-editing/page.tsx' },
    { name: 'content-lead-gen', path: 'services/content-lead-gen/page.tsx' },
    { name: 'redeem', path: 'redeem/page.tsx' },
];

function convertHtmlToJsx(html) {
    let mainContent = html;
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
    if (bodyMatch) {
        mainContent = bodyMatch[1];
    }

    // Remove first <nav> or <header> (which is the top nav)
    mainContent = mainContent.replace(/<nav[^>]*>[\s\S]*?<\/nav>/, '');
    mainContent = mainContent.replace(/<header[^>]*>[\s\S]*?<\/header>/, '');
    
    // Remove <footer> (which is the bottom footer)
    mainContent = mainContent.replace(/<footer[^>]*>[\s\S]*?<\/footer>/, '');

    // Remove WhatsApp button if it exists
    mainContent = mainContent.replace(/<a class="wa-btn[^>]*>[\s\S]*?<\/a>/, '');
    
    // Remove script tags
    mainContent = mainContent.replace(/<script>[\s\S]*?<\/script>/g, '');

    // Remove HTML comments
    mainContent = mainContent.replace(/<!--[\s\S]*?-->/g, '');

    // Common React replacements
    let jsx = mainContent
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/onclick="[^"]*"/gi, '')
        .replace(/<br>/g, '<br />')
        .replace(/<hr>/g, '<hr />')
        .replace(/<input([^>]*?[^\/])>/g, '<input$1 />')
        .replace(/<img([^>]*?[^\/])>/g, '<img$1 />')
        .replace(/style="([^"]*)"/g, (match, p1) => {
            const styles = p1.split(';').filter(s => s.trim());
            const styleObj = {};
            styles.forEach(s => {
                let [key, val] = s.split(':');
                if (key && val) {
                    key = key.trim();
                    val = val.trim();
                    if (key.startsWith('--tw-')) return;
                    // Fix HTML entities in quotes
                    val = val.replace(/&quot;/g, "'");
                    // Keep original CSS variable names for custom properties
                    if (key.startsWith('--')) {
                        styleObj[key] = val;
                    } else {
                        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
                        styleObj[camelKey] = val;
                    }
                }
            });
            if (Object.keys(styleObj).length === 0) return '';
            return `style={{ ${Object.entries(styleObj).map(([k, v]) => `"${k}": "${v}"`).join(', ')} }}`;
        });

    return `
export default function Page() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;
}

screens.forEach(screen => {
    const htmlPath = path.join(__dirname, 'temp_screens', screen.name + '.html');
    const destPath = path.join(__dirname, 'app', screen.path);
    
    if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');
        const jsx = convertHtmlToJsx(html);
        
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.writeFileSync(destPath, jsx);
        console.log(`Converted ${screen.name} to ${destPath}`);
    } else {
        console.error(`Could not find ${htmlPath}`);
    }
});
