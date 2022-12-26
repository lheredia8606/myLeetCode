class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        largest = 0
        if len(s)==1:
            return 1
        count = 1
        flag = False
        substring = ""
        for i in range(0,len(s)):
            j = i+1
            flag = False
            while flag == False and j<len(s):
                if substring=="":
                    substring = s[i]
                for k in substring:
                    if k==s[j]:
                        flag = True
                if flag == False:
                    substring=substring+s[j]
                    count = count+1
                    j+=1
                else:
                    if count>largest:
                        largest = count
                    count = 1
                    substring = ""
                if count>largest:
                        largest = count 
        return largest