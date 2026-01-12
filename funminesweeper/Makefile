funminesweeper.html: funminesweeper_deps.html minesweeper.js minesweepersolve.js \
	             minesweeperui.js minesweepermain.js
	@printf " \
/minesweeper.js\n \
.d\n \
i\n\
<script>\n\
.\n\
.r minesweeper.js\n \
/minesweeperui.js\n \
.d\n \
.-1\n \
.r minesweeperui.js\n \
/minesweepersolve.js\n \
.d\n \
.-1\n \
.r minesweepersolve.js\n \
/minesweepermain.js\n \
.d\n \
.-1\n \
.r minesweepermain.js\n \
.+1\n\
i\n\
</script>\n\
.\n\
w index.html\n \
q\n" | ed funminesweeper_deps.html

clean:
	rm -f index.html
