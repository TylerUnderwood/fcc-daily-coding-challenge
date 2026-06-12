function extractContent(html) {
    return html.replace(/<[^>]*>/g, '')
}
