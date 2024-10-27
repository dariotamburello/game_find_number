// 6 numbers & 10 try, normal --> 2400 (-1 x try) min: 2390  easy: --> 800 (-1) min: 790
// 6 numbers & 15 try, normal --> 2400 (-3 x try) min: 2355  easy: --> 800 (-3) min: 755
// 6 numbers & 20 try, normal --> 2400 (-5 x try) min: 2300  easy: --> 800 (-5) min: 700
// 5 numbers & 10 try, normal --> 1200 (-1 x try) min: 1190  easy: --> 500 (-1) min: 490
// 5 numbers & 15 try, normal --> 1200 (-3 x try) min: 1155  easy: --> 500 (-3) min: 455
// 5 numbers & 20 try, normal --> 1200 (-5 x try) min: 1100  easy: --> 500 (-5) min: 400

// 4 numbers & 10 try, normal --> 600 (-1 x try) min: 590    easy: --> 200 (-1) min: 190
// 4 numbers & 15 try, normal --> 600 (-3 x try) min: 555    easy: --> 200 (-3) min: 155
// 4 numbers & 20 try, normal --> 600 (-5 x try) min: 500    easy: --> 200 (-5) min: 100
// 3 numbers & 10 try, normal --> 300 (-1 x try) min: 290    easy: --> 100 (-1) min: 090
// 3 numbers & 15 try, normal --> 300 (-3 x try) min: 255    easy: --> 100 (-3) min: 055    
// 3 numbers & 20 try, normal --> 300 (-5 x try) min: 200    easy: --> 100 (-5) min: 000

// POINTS
// 600 win default

const basicPoints = {
    normal: {
        3: 300,
        4: 600,
        5: 1200,
        6: 2400
    },
    easy: {
        3: 100,
        4: 200,
        5: 500,
        6: 800
    }
}

const decreasePoints = {
    10: 1,
    15: 3,
    20: 5
}

export const calculatePoints = (difficulty, digits, maxAttemps, trys) => {
    return basicPoints[difficulty][digits] - (decreasePoints[maxAttemps] * (trys - 1))
}