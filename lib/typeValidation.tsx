/**
 * Ensures component type is not overwritten
 *
 * @param {string} expectedType - The expected type to validate against
 * @returns {func} Custom PropTypes validation function
 */
export const typeValidation =
  (expectedType: string): Function =>
  (props: { [key: string]: any }, propName: string, componentName: string) => {
    if (props[propName] !== expectedType) {
      return new Error(
        `'${propName}' in '${componentName}'\n\nYou may NOT pass in a prop value for '${propName}'. ` +
          "It had 2 underscores in the prop name for a reason. So, if you would kindly remove it, we can all go about our error free day.\n"
      )
    }
  }
export default typeValidation
