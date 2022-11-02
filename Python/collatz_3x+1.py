#Hello world! This is a simple function to show how the 3x+1 conjecture works. (not to prove anything at all).
#inspired by @Veritasium https://www.youtube.com/watch?v=094y1Z2wpJg  
def collatz(n):
    resp = n
    last = n[-1]
    if len(resp)<3 or (resp[-3:] != [4, 2, 1]):
        if last % 2 == 0:
            resp.append(int(last / 2))
        elif last % 2 != 0:
            resp.append(int((last * 3) + 1))
        return collatz(resp)
    return resp
#You can put any number you want and see how it works!!
print (collatz([9999999999999999]))