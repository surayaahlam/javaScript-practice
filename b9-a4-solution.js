/** Problem - 1: Help The Zoo Manager
 * বাকের ভাই মিরপুর চিড়িয়াখানার ম্যানেজার । প্রতিদিন তাকে অসংখ্য টিকেট বিক্রি করতে হয় । টাকার হিসেব এ
তিনি সবসময় গড়মিল বাধিয়ে ফেলেন । তুমি যেহেতু সদ্য ডেভেলোপার হচ্ছ ো বাকের ভাই ত োমার কাছে একটি
হেল্প চেয়েছে । বাকের ভাই কে calculateMoney( ) নামে একটি ফাংশন বানিয়ে দিতে হবে যাকে প্রতিদিন
টিকেট সেল করার সংখ্যা ইনপুট দিলে সে সকল খরচ বাদ দিয়ে ম োট কত টাকা বাকের ভাইর কাছে থাকে তা বলে
দিতে পারে ।
চিড়িয়াখানায় প্রতি টিকেট বিক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতিদিন ১ জন দার োয়ান কে দিতে হয় ৫০০
টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।

* Input :
ফাংশন টি ইনপুট নেবে টিকেট সেল করার সংখ্যা । ইনপুট হবে একটি পজিটিভ সংখ্যা । (0<=Input)

* Output :
টিকেটের আয় ও ব্যয় গুল ো ক্যালকুলেট করে বাকী কত টাকা বাকের ভাইর কাছে থাকল ো সেটাই ত োমার
ফাংশন আউটপুট হিসেবে রিটার্ন করবে। আউটপুট পজিটিভ নেগেটিভ যে ক োন কিছুই হতে পারে।
 💡যেমন ইনপুট যদি 10 হয় তাহলে আউটপুট হবে (10 * 120) - (500 + (8 * 50) ) = 300

* Challenge📢: বাকের ভাই যদি ইনপুট হিসেবে নেগেটিভ সংখ্যা দেয় তাহলে ত োমাকে একটা error ম্যাসেজ
আউটপুট হিসেবে রিটার্ন করে দিতে হবে।
*/
function calculateMoney(ticketSale){
    const perTicketValue = 120;
    const perDayGuardSalary = 500;
    const stafQuantity = 8;
    const perStafCost = 50;

    if(ticketSale < 0 || typeof ticketSale !== 'number'){
        return 'Invalid Number';
    }
    // return ticketSale * 120 - (500 + 8 * 50);
    const totalIncome = perTicketValue * ticketSale;
    const totalExpenditure = perDayGuardSalary + stafQuantity * perStafCost;
    const remainingMoney = totalIncome - totalExpenditure;
    return remainingMoney;
    
}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));

console.log('-----------------------------');

/** Problem - 2: Good Name , Bad Name
 * সালমান ভাই ও রাশেদা ভাবীর ক োল জুড়ে এসেছে একটা পুত্র সন্তান। সালমান ভাই পুত্র সন্তানের একটা ভাল ো নাম রাখতে চান । কিন্তু তাদের এলাকায় গ্রামের মানুষরা নাম কে ব্যাংগ করে উচ্চারন করে । যে মন কার ো নাম salman হলে তারা বলে সালমাইন্যা । কার ো নাম jafor হলে তারা বলে জাফইর ্যা । সালমান ভাই চান না তার পুত্র সন্তান কে কেউ এভাবে ক্ষেপাক ।
সালমান ভাই দেখতে পেলেন যে যাদের নামের শেষে a, y, i , e , o , u, w থাকে তাদের কে আসলে ক্ষেপান ো
যায় না । যমন Tonoy, utsho , Roide, shanto এসব ধরনের নাম গুল োকে ব্যাংগ করে উচ্চারন করা যায় না ।
এখন ত োমাকে সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লিখে দিতে হবে। যেটা একটা স্ট্রি ং ইনপুট নেবে । এবং ফাংশনটি চেক করে দেখবে নাম টি রাখা ভাল ো হবে না খারাপ হবে । ভাল ো হলে সে রিটার্ন
করবে Good Name আর নামটি খারাপ হলে রিটার্ন করবে Bad Name

* Input : ত োমার ফাংশনটি ইনপুট নেবে একটি নাম । ইনপুটটি হবে একটি স্ট্রি ং । যে খানে character গুল ো ছ োট হাতের বা বড় হাতের হতে পারে।

* Output : ফাংশনটি আউটপুট হিসেবে রিটার্ন করবে একটি স্ট্রি ং । যার ভ্যালুহবে Good Name অথবা Bad Name

* Challenge📢: ইনপুট হিসেবে স্ট্রি ং টাইপের বাইরে অন্য যে ক োন কিছু দিলে এটা শুধুমাত্র “invalid” রিটার্ন করবে ।
 */
function checkName(name){
    if (typeof name !== 'string'){
        return 'invalid';
    }
    let lastLetter = name[name.length - 1].toLowerCase(); //name.slice(-1).toLowerCase()
    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    //let result = checkArray.includes(lastLetter);
    //return result? 'Good Name' : 'Bad Name'
    
    if(checkArray.includes(lastLetter)){
        return 'Good Name';
    }
    else{
        return 'Bad Name';
    }
}
console.log(checkName('Salman'));
console.log(checkName('RAFFE'));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName(["Rashed"]));

console.log('-----------------------------');

/**Problem - 3: Virus in my Array
 * ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রিয়েট করতে হবে যা ইনপুট হিসেবে একটি Array নেবে । ফাংশনটি আরেকটি Array রিটার্ন করবে যেখানে ভ্যালুগুল ো হবে শুধু নাম্বার । অর্থাৎ Array এর যে সকল elements নাম্বার না , তাদের ডিলিট করে শুধুমাত্র নাম্বার গুল ো কে Array আকারে রিটার্ন করতে হবে । তুমি যদি এই ফাংশনে এই [ NaN, 1, 12, 0, -1, undefined ] Array টি পাস কর ো তাহলে সে ত োমাকে রিটার্ন করবে [ 1 , 12 , 0 , -1 ]

* Input :
ফাংশনটি ইনপুট নেবে একটি Array । Array এর উপাদান গুল োর Datatype যে ক োন ধরনের হতে পারে ।

* Output :
ফাংশনটি আউটপুট দেবে আরেকটি Array । Array এর উপাদান গুল ো হবে শুধুমাত্র নাম্বার ।

* Challenge📢: ফাংশনটি তে Array ছাড়া অন্য ক োন ভ্যালুপাস করলে সেটা একটা error message রিটার্ন করবে ।
 */
function deleteinvalids(array){
    // To check type of argument is array or not (Challenge) 
    if (Array.isArray(array) !== true){
        return 'Invalid Array';
    }
    let numberArray = [];
    for (let element of array){
        if (typeof(element) === 'number' && !isNaN(element)){
            numberArray.push(element);
        }
    }  
    return numberArray;
}    
console.log(deleteinvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteinvalids(["1" , {num:2} , NaN ]));
console.log(deleteinvalids([ 1 , 2 , -3 ]));
console.log(deleteinvalids({num: [ 1 , 2 , 3 ]}));

console.log('-----------------------------');

/**Problem - 4 : Make A Great Password
 * কলিমুদ্দিন সাহেব নতুন ফ োন কিনে বিভিন্ন ওয়েবসাইটে ভিজিট করেন এবং বিভিন্ন এপ্লিকেশনে একাউন্ট ক্রিয়েট করেন । কিন্তু তিনি পাসওয়ার্ড মনে রাখতে পারেন না । তিনি এমন একটি ফাংশন চান, যেখানে তার ইনফরমেশন
এবং ওয়েবসাইট নেম দিলে সেটা কলিমুদ্দিন সাহেবকে একটি মনে রাখার মত ো পাসওয়ার্ড জেনারেট করে দিতে পারবে । তার জন্য password() নামে একটা ফাংশন লিখতে হবে ।

* Input :
ফাংশনটি একটা object ইনপুট হিসেবে নিবে । যেখানে শুধু তিনটি প্র োপার্টি থাকবে ।
{ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
⚠️অব্জেক্ট এ প্র োপার্টি গুল োর নাম একদম সেইম হতে হবে।
Password-Structure :
Website Name(প্রথম অক্ষর বড় হাতের হবে) #-ইউজারনেম @-birthYear

* Output:
ফাংশনটি উপরের স্ট্রাকচার অনুযায়ী একটা স্ট্রি ং আউটপুট আকারে রিটার্ন করবে।
Google#kolimuddin@1999

* Challenge📢: যদি ক োন একটা প্র োপার্টি মিসি ং থাকে অথবা যদি birthYear 4 ডিজিটের না হয় ফাংশনটি রিটার্ন করবে একটি স্ট্রি ং যার ভ্যালুহবে invalid
 */
function password(obj) {
    if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
        return 'invalid';
    }
    let capital1stSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1)
    let passwordGenerate = capital1stSiteName + "#" + obj.name + "@" + obj.birthYear;
    return passwordGenerate;   
}
console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));

console.log('-----------------------------');

/**Problem - 5: Monthly Savings of a Freelancer
 * ফ্রিল্যান্সার শাহেদ প্রতি মাসে বেশ কিছু পেমেন্ট ক্লায়েন্ট দের থেকে পায় । কিন্তু পেমেন্ট এর কিছু ট্যাক্স পরিশ োধ এবং নিজের লিভি ং কস্ট এর কারনে সে সেভি ংস করতে পারে না । তার সেভি ংস এর হিসেব করার জন্যে তাকে
monthlySavings() নামে একটি ফাংশন তৈরী করে দিতে যেটা ইনপুট হিসেবে নেবে একটি Array (প্রতি মাসে পাওয়া সকল পেমেন্ট ) এবং একটি Number ( শাহেদের লিভি ং কস্ট ) ।
শাহেদের যে সকল পেমেন্ট 3000 টাকা বা তার বেশি সে সকল পেমেন্ট থেকে ব্যাংক Tax হিসেবে ২০% টাকা কেটে নেয় । এখন ম োট ইনকাম থেকে Tax গুল ো বাদ দিয়ে এবং Living cost বাদ দিয়ে বাকী যে টাকা থাকে সেটাই হল ো শাহেদের সেভি ংস । অর্থাৎ ফাংশনটি শাহেদের সেভি ংস কে রিটার্ন করবে । যদি সেভি ংস করার মত ো টাকা না থাকে অর্থাৎ সেভি ংস এর ভ্যালুযদি ০ এর চেয়ে কম হয় তাহলে ফাংশনটি রিটার্ন করবে একটি স্ট্রি ং তাহল ো “earn more” ।

* Input :
ফাংশনটি ইনপুট নেবে একটি Array (All payments) এবং একটি number (Living cost) ।

* Output :
ফাংশনটি একটি number অথবা string রিটার্ন করবে ।
    ● যদি savings 0 বা তার থেকে বেশি হয় তাহলে রিটার্ন করবে একটা number ( Total Savings )
    ● যদি savings 0 থেকে ছ োট হয় তাহলে রিটার্ন করবে String যার ভ্যালুহবে earn more

* Challenge📢: ফাংশনটি তখন invalid input কে string টি রিটার্ন করবে ।
    ● যদি প্রথম প্যারামিটার টি Array না হয়
    ● যদি 2য় প্যারামিটার টি নাম্বার না হয়
 */
function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== "number"){
        return 'invalid input'
    }
    
    let netIncome = 0;
    for (let payment of arr){
        if(payment >= 3000){
            let tax = payment * 0.2;
            netIncome += payment - tax;    
        } else{
            netIncome += payment;
        }
    }
    
    let savings = netIncome - livingCost;
    return savings >= 0 ? savings : 'earn more';
}
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));

