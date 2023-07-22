function quadraticRoots(a, b, c) {
  let roots = new Array();
  let root1 = 0,
    root2 = 0;
  // value of b^2-4ac
  let temp = Math.pow(b, 2) - 4 * a * c;

  // if b^2-4ac is less then zero then roots are imaginary
  if (temp < 0) roots.push(-1);
  else {
    //calculate root1 and root2 using fomula
    // Math.floor function returns greatest integer below ( -b + sqrt(temp) )
    // Math.sqrt function returns square root of temp
    root1 = Math.floor((-b + Math.sqrt(temp)) / (2 * a));
    root2 = Math.floor((-b - Math.sqrt(temp)) / (2 * a));
    // store both roots calculated in Array
    // Math.max function returns greater value between root1 and root2
    // Math.min function returns smaller value between root1 and root2
    roots.push(Math.max(root1, root2));
    roots.push(Math.min(root1, root2));
  }
  return roots;
}

let x = quadraticRoots(2, 3, 4);
console.log(x);
