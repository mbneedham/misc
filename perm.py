

def perm(s):
    if s == "":
        yield ""
    else:
        for x in xrange(len(s)):
            for s2 in perm(s[:x]+s[x+1:]):
                yield s[x] + s2

for s in perm("cat"):
    print s
