/**
 * The police department of your city has just started its journey. Initially, they don’t have any manpower. So, they started hiring new recruits in groups.
 Meanwhile, crimes keeps occurring within the city. One member of the police force can investigate only one crime during his/her lifetime.
 If there is no police officer free (isn't busy with crime) during the occurrence of a crime, it will go untreated.
 Given the chronological order of crime occurrences and recruit hirings, find the number of crimes which will go untreated.
 If the integer is -1 then it means a crime has occurred. Otherwise, the integer will be positive, the number of officers recruited together at that time. No more than 10 officers will be recruited at a time.

 
* Recruits groups will be like : (Consider as input)
 -1 -1 1
 1 -1 1 -1 -1 1 1 1 
 -1 -1 2 -1 -1 -1 -1 -1 -1 -1 -1
 
* Output : Log a single integer, the number of crimes which will go untreated. 
2 
1 
8
*/
function countUntreatedCrimes(input) {
    const events = input.split(' ').map(Number); // Convert input string to array of numbers
    let availableOfficers = 0;
    let untreatedCrimes = 0;

    for (const event of events) {
        if (event === -1) {
            // A crime has occurred
            if (availableOfficers > 0) {
                availableOfficers--; // An officer handles the crime
            } else {
                untreatedCrimes++; // Crime goes untreated
            }
        } else if (event > 0) {
            // Officers are recruited
            availableOfficers += event;
        }
    }
    return untreatedCrimes; // Print the number of untreated crimes
}

console.log(countUntreatedCrimes("-1 -1 1")); 
console.log(countUntreatedCrimes("1 -1 1 -1 -1 1 1 1")); 
console.log(countUntreatedCrimes("-1 -1 2 -1 -1 -1 -1 -1 -1 -1 -1"));

console.log('.................................');
/**
 * There are three friend living on the straight line Ox in Lineland. The first friend lives at the point x1, the second friend lives at the point x2, and the third friend lives at the point x3. They plan to celebrate the New Year together, so they need to meet at one point. What is the minimum total distance they have to travel in order to meet at some point and celebrate the New Year?
 It's guaranteed that the optimal answer is always integer.
 Input contains three distinct(স্বতন্ত্র) integers x1, x2 and x3 (1 ≤ x1, x2, x3 ≤ 100) — the coordinates of the houses of the first, the second and the third friends respectively.
 
 * Coordinates will be like : (Consider as input) 
 7 1 4 
 30 20 10
 
 * Output : Log one integer — the minimum total distance the friends need to travel in order to meet together. 
 6 
 20
 */
function minTotalDistance(x1, x2, x3) {
    let median;

    // Determine the median value manually
    if ((x1 >= x2 && x1 <= x3) || (x1 <= x2 && x1 >= x3)) {
        median = x1;
    } else if ((x2 >= x1 && x2 <= x3) || (x2 <= x1 && x2 >= x3)) {
        median = x2;
    } else {
        median = x3;
    }

    // Calculate the total distance to the median
    const totalDistance = Math.abs(x1 - median) + Math.abs(x2 - median) + Math.abs(x3 - median);

    return totalDistance;
}

// Example usage:
console.log(minTotalDistance(7, 1, 4)); 
console.log(minTotalDistance(30, 20, 10));