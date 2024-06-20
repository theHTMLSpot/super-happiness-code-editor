// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize CodeMirror for HTML editor
    const htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlFile'), {
        mode: 'text/html',
        theme: 'material',
        lineNumbers: true,
        autoCloseTags: true,
        matchBrackets: true
    });

    // Initialize CodeMirror for CSS editor
    const cssEditor = CodeMirror.fromTextArea(document.getElementById('cssFile'), {
        mode: 'css',
        theme: 'material',
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true
    });

    // Initialize CodeMirror for JavaScript editor
    const jsEditor = CodeMirror.fromTextArea(document.getElementById('jsFile'), {
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true
    });

    // Function to update the output frame
    function updateOutput() {
        const htmlContent = htmlEditor.getValue(); // Get HTML content from HTML editor
        const cssContent = cssEditor.getValue(); // Get CSS content from CSS editor
        const jsContent = jsEditor.getValue(); // Get JavaScript content from JavaScript editor

        const combinedCode = `
            <html>
            <head>
                <style>${cssContent}</style>
            </head>
            <body>
                ${htmlContent}
                <script>${jsContent}</script>
            </body>
            </html>
        `;

        const outputFrame = document.getElementById('output-frame');
        const outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;

        outputDoc.open();
        outputDoc.write(combinedCode);
        outputDoc.close();
    }

    // Update output on editor change events
    htmlEditor.on('change', updateOutput);
    cssEditor.on('change', updateOutput);
    jsEditor.on('change', updateOutput);

    // Initial update on page load
    updateOutput();
});