import sys
array = [line.strip().replace('"','\\"') for line in sys.stdin]

out = '"'
for line in array:
    out+=line+"\\n"
out = out[:-2]
out+='"'
print(out)