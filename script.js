function marksheet (s1)
{

if (s1 >= 50 && s1 <=59 )
{
    return "D Grade"
}


else if (s1 >= 60 && s1 <=69 )
{
    return "C Grade"
}
else if (s1 >= 70 && s1 <=79)
{
    return "B Grade"

}

else if (s1 >= 80 && s1 <=100 )
{
    return "A Grade"
}


else{
    return "fail"
}
}
console.log(marksheet(95))