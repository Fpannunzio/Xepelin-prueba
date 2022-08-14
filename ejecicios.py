from typing import List
import numpy as np

open_parenthesis = "("
closing_parenthesis = ")"
  
# Function to check parentheses
def checkBalanced(myStr):
  stack = []
  for i in myStr:
      if i == open_parenthesis:
          stack.append(i)
      elif i == closing_parenthesis:
          if (len(stack) > 0):
              stack.pop()
          else:
              return "Error! Expression is not balanced"
  if len(stack) == 0:
      return "Expression is balanced"
  else:
      return "Error! Expression is not balanced"

# using divide and np
def allProducts(arr):
  new_arr = np.array(arr)
  product_total = np.product(new_arr)

  return product_total / new_arr

#common algorithm, not using divide or np
#the idea is to first get the product of all elements in the left
def productArray(arr):

  n = len(arr)

  if n == 1:
      return 0

  i, aux = 1, 1

  prod = [1 for _ in range(n)]


  #the idea is to first get the product of all elements in the left
  for i in range(n):
      prod[i] = aux
      aux *= arr[i]

  # Initialize temp to 1 for product on right side
  aux = 1

  #then, multiply the product of the elements on the left by the products of
  #the elements on the right. Notice that we are looping backwards this time
  for i in range(n - 1, -1, -1):
      prod[i] *= aux
      aux *= arr[i]

  return prod


def main():
  exc = input("Press 1 for balanced parenthesis or 2 to \n")

  if exc == "1":
    exp = input("Write an expression to be analized\n")
    print(checkBalanced(exp))
  elif exc == "2":
    print (productArray([1, 3, 6, 4]))

if __name__ == "__main__":
  main()