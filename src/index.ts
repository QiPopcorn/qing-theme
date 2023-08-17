import { promises as fs } from 'node:fs';
import getTheme from './theme';

fs.mkdir('./themes', { recursive: true })
    .then(() =>
        Promise.all([
            fs.writeFile(
                './themes/qing-dark-theme.json',
                `${JSON.stringify(
                    getTheme({
                        style: 'dark',
                        name: 'QiNg Dark Theme',
                    }),
                    null,
                    2
                )}\n`
            ),
        ])
    )
    .catch(() => process.exit(1));
