// Assuming selCmpt is a selection component object, for example:
const selCmpt = {
    project: {
        items: [
            { field: 'category' },
            { field: 'value' }
        ]
    }
};

// Extract the field from the first project item
const field = selCmpt.project.items[0].field;

console.log(field); // Output: 'category'
