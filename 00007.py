class Solution: 
    def reverse(self,x):
        isNegative = False
        if x <0:
            isNegative = True
            x = x*-1
        stringX = str(x)
        stringX = stringX[::-1]
        x = int(stringX)
        if isNegative:
            x = x*-1
        if  x < -2**31 or  x > (2**31-1):
            return 0
        return x

sol = Solution()
print(sol.reverse(-13))
        
    

