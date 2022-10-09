// Private to this file
const staff = [
    "Benjamin",
    "Abby",
    "Max",
    "Russell"
]

// Creates and adds the getStaff function to global 'exports'
exports.getStaff = () => {
    const idx = Math.floor(Math.random()*staff.length);
    return staff[idx];
}