export function displayClassName(target) {
    console.log("class name: " + target.name);
}
export function displayClassNameWithPurpose(purpose) {
    return function (target) {
        console.log("class name: " + target.name + ", purpose: " + purpose);
    };
}
//# sourceMappingURL=Decorators.js.map