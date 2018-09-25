import fs from 'fs';

class Html {
    constructor() {
        this.html = null;
    }

    getHtml() {
        if(this.html) {
            return this.html;
        }
        /* eslint-disable-next-line */
        const htmlPath = `${process.cwd()}/public/index.html`;
        console.info(`index.html的所在路径为:${htmlPath}`);
        this.html = fs.readFileSync(htmlPath, 'utf8');
        return this.html;
    }
}

export default new Html();
