class Solution:
    def isPalindrome(self, x: int) -> bool:
        number = str(x)
        output = True
        if len(number)==1:
            return True
        for i in range(len(number)):
            if i >= len(number) -i:
                return True
            firstNumber = number[i]
            secoundNumber = number[len(number)-i-1]
            if firstNumber != secoundNumber:
                return False

sol = Solution()
print(sol.isPalindrome(0))