/*
for i in 1...100 {
    print("Number \(i)")
}
*/

//var i = 1
//while i < 100 {
//    print("Number \(i)")
//    i += 1
//}

var sayilar = [1, 3, 5, 7, 17, 11, 9, 1, 6]

for (indexNumber, sayi) in sayilar.enumerated(){
    print("\(indexNumber) - \(sayi)")
}
