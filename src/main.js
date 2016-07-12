import "aurelia-bootstrapper";
import "aurelia-loader-webpack";

export function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(() => aurelia.setRoot());
}
