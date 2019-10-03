// 1. What is the Big O for this?
//     1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
//     You want to find a playmate for your dog, preferably of the same breed. 
//     So you want to know if anyone out of the 15 people have the same breed as your dog. 
//     You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
//     Someone yells - "I do, be happy to bring him over"

//     Answer: Constant Time

//     2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
//     You want to find a playmate for your dog who is of the same breed. 
//     So you want to know if anyone out of the 15 people have the same breed as your dog. 
//     You start with the first person and ask him if he has a golden retriever. 
//     He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

//     Answer: Linear Time

// 2. Even or odd
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// Answer: Constant Time, no matter the input the algorithm has one check, true or false.

// 3. Are you here?
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// Answer: Polynomial Time, nested loops, with input size n raise by a constant power K, 2 loops

// 4. Doubler
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// Answer: Linear Time, number of inputs directly proportional to the runtime

// 5. Naive search
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// Answer: Linear Time, number of inputs directly proportional to the runtime

//6. Creating pairs:
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// Answer: Polynomial Time, nested loops, with input size n raise by a constant power K, 2 loops

// 7. Compute the sequence
// What does the following algorithm do? What is its runtime complexity?
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// Answer: Fibonacci Sequence, exponential

// 8. An efficient search (given sorted array)
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// Answer: Logarithmic, a ten fold increase in input wwould only give a fractional increase in runtime

// 9. Random element
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Answer: Constant Time

// 10. What Am I?
// What does the following algorithm do? What is its runtime complexity?
function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}
//  Answer: checks for odd number, linear

// 11. Tower of Hanoi
function tower(disk, srcTower, desTower, bufTower) {
    if(disk >= 1) {
        tower(disk-1, srcTower, bufTower, desTower);

        console.log('Move disk to Tower', srcTower, 'to Tower', desTower);

        tower(disk-1, bufTower, desTower, srcTower);
    }
    return 'done';
}

// console.log(tower(6, '1', '3', '2'))

// Increase in input leads to greater increase in steps 
// 5 disks - 32 steps, 4 disks - 15 steps, 3 disks - 7 steps
// Exponential time

// 12. Iterative Version
    // 1. Count Sheep - linear time / recursion - linear time
    function countSheep(num) {
        for(let i = 0; i < num; i++) {
            console.log(num - i + ': Another sheep jumps over the fence')
        }
        console.log('All Sheep jumped over the fence')
    }
    let sheep = 4;
    // console.log(countSheep(sheep));

    // 2. Power Calculator - linear time / recursion - linear time
    function powerCalculator(num, exp) {
        if(exp >= 0) {
            let answer = 1
            for(let i = 1; i <= exp; i++) {
                answer = answer * num
            }
            return answer;
        }
        else {
            return 'exponent should be >= 0'
        }
    }
    // console.log(powerCalculator(10, -5));

    // Question 3
    // Reverse String - linear time / recursion - linear time
    function reverseString(string) {
        let newString = []
        for(let i = 0; i < string.length; i++) {
            newString.push(string.charAt((string.length - 1) - i))
        }

        return newString.join('')
    }
    let testString = 'reverse string practice'
    // console.log(reverseString(testString))

    // Question 4
    // nth Triangle number - linear time / recursion - linear time
    function triangularNum(num) {
        let triNum = 0;
        
        for(let i = 1; i <= num; i++) {
            triNum += i;
        }

        return triNum
    }
    //console.log(triangularNum(10))
    
    // Question 5
    // split string - linear time / recursion - linear time
    function splitter(string, splitAt) {
        let newString = []

        for(let i = 0; i < string.length; i++) {
            if(string.charAt(i) !== splitAt){
                newString.push(string.charAt(i))
            }
        }

        return newString.join('')
    }
    let testSplit = '02/20/2020'
    let splitAt = '/'
    // console.log(splitter(testSplit, splitAt))

    // Question 6
    // fibonacci - linear time / recursion - exponential time
    function fibonacci(num) {
       let fibNumSeq = [0, 1,]

       for(let i = 0; i < num; i++) {
           let fibNum = (fibNumSeq[i] + fibNumSeq[i+1])

           fibNumSeq.push(fibNum)
       }

       return fibNumSeq.join(' ')
    }
    // console.log(fibonacci(7))

    // Question 7 - linear time / recursion - linear time
    function factorial(num) {
        let factNum = 1
        for(let i = 1; i <= num; i++) {
            factNum *= i
        }
        return factNum
    }
    console.log(factorial(5))
