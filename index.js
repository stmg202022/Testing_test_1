//

const getFullName = ({ x: fname, y: lname }) => {
  return `${fname} ${lname}`;
};

const myFullName = getFullName({ x: "samson", y: "Tamang" });
console.log(myFullName);
const expectedMyName = "samson Tamang";
// const expectedMyName = "samsonTamang"; //throw Error

if (myFullName !== expectedMyName) {
  throw new Error(` ${expectedMyName}  is not equal to ${myFullName}`);
}
