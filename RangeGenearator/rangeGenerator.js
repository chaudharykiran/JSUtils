function *naturalNumber(here, there) { 
  let n = here;

  while (n < there) { // exclusive of there
    yield n++ 
  } 
}

for (let i of naturalNumber(1, 5)) {
  console.log(i)
}