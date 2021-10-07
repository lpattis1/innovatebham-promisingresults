// Promise chaining (old way)

slowMath
  .add(6, 2)
  .then((response) => {
    console.log(`(Chaining). The sum is ${response}`);
    return response;
  })
  .then((result1) => {
    console.log(`(Chaining). The first result is: ${result1}`);
    return result1 * 2;
  })
  .then((result2) => {
    console.log(`(Chaining). The second result is: ${result2}`);
    return result2 / 4;
  })
  .then((result3) => {
    console.log(`(Chaining). The third result is: ${result3}`);
    return result3 - 3;
  })
  .then((result4) => {
    console.log(`(Chaining). The fourth result is: ${result4}`);
    return result4 + 98;
  })
  .then((result5) => {
    console.log(`(Chaining). The fifth result is: ${result5}`);
    return result5 % 2;
  })
  .then((result6) => {
    console.log(`(Chaining). The sixth result is: ${result6}`);
    return result6 * 50;
  })
  .then((result7) => {
    console.log(`(Chaining). The seventh result is: ${result7}`);
    return result7 % 40;
  })
  .then((result8) => {
    console.log(`(Chaining). The eighth result is: ${result8}`);
    return result8 + 32;
  })
  .then((finalresult) => {
    console.log(`(Chaining). The final result is: ${finalresult}`);
  })
  .catch((err) => {
    console.log(err);
  });

//   ----------------------------------

//   Async/Await

async function doMath() {
  try {
    const addNums = await slowMath.add(6, 2);
    console.log(`(Async/Await). The sum is ${addNums}`);

    const result1 = (await addNums) * 2;
    console.log(`(Asyn/Await). The first result is: ${result1}`);

    const result2 = (await result1) / 4;
    console.log(`(Asyn/Await). The second result is: ${result2}`);

    const result3 = (await result2) - 3;
    console.log(`(Asyn/Await). The third result is: ${result3}`);

    const result4 = (await result3) + 98;
    console.log(`(Asyn/Await). The fourth result is: ${result4}`);

    const result5 = (await result4) % 2;
    console.log(`(Asyn/Await). The fifth result is: ${result5}`);

    const result6 = (await result5) * 50;
    console.log(`(Asyn/Await). The sixth result is: ${result6}`);

    const result7 = (await result6) % 40;
    console.log(`(Asyn/Await). The seventh result is: ${result7}`);

    const finalresult = (await result7) + 32;
    return finalresult;
  } catch {
    const err = new Error("Something went wrong");
    return err;
  }
}

doMath()
  .then((result) => {
    console.log(`(Asyn/Await). The final result is: ${result}`);
  })
  .catch((err) => {
    console.log(err);
  });
