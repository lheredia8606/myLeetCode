class Solution:
    def myAtoi(self, s: str) -> int:
        toReturn = ""
        letter = False
        pointer = 0
        sign = ""
        for i in range(0,len(s)):
            if s[i]==" ":
                pass
            else:
                pointer = i
                break
        while pointer < len(s) and letter == False:
            if (s[pointer] == "-" or s[pointer] == "+"):
                if  sign=="" and toReturn =="":
                    sign = s[pointer]
                    pointer+=1
                else:
                    letter = True
            elif s[pointer].isdigit():
                toReturn = toReturn+s[pointer]
                pointer+=1
            else:
                letter = True
        if toReturn == "":
            toReturn = "0"
        toReturn =int(sign + toReturn)
        if toReturn < -2**31:
            toReturn = -2**31
        if toReturn > 2**31-1:
            toReturn = 2**31-1
        return toReturn

sol = Solution()
print (sol.myAtoi("   -42"))



#controlar si el output es solo un signo


    