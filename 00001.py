class Solution:
  numbers = [1,2,3,4,5]
  target = 9

#incluir el self en los argumentos
  def twoSum (numbers,target):
    for i in range(0,len(numbers)+1):
      firstNumber = int(numbers[i])
      for j in range(i+1,len(numbers)):
        secondNumber = int(numbers[j])
        if firstNumber+secondNumber == target:
          answer = [i,j]
          return answer
  twoSum(numbers,target)