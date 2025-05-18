/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
    /**
     * @param {{ resolve: { alias: { [x: string]: string; }; }; }} config
     */
    webpack(config) {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
    },

};
export default config;
