
function one() {
	var a = new Array(), n = ""
	a[1] = 'Đ';
	a[2] = 'ơ';
	a[3] = 'n';
	a[4] = ' ';
	a[5] = 'g';
	a[6] = 'i';
	a[7] = 'ả';
	a[8] = 'n';
	a[9] = '!';
	a[10] = ' ';
	a[11] = 'V';
	a[12] = 'ì';
	a[13] = ' ';
	a[14] = 'M';
	a[15] = 'ầ';
	a[16] = 'y';
	a[17] = ' ';
	a[18] = 'Đ';
	a[19] = 'ẹ';
	a[20] = 'p';
	a[21] = ' ';
	a[22] = 'T';
	a[23] = 'r';
	a[24] = 'a';
	a[25] = 'i';
	a[26] = ' ';
	a[27] = '♥';
	a[28] = ' ';
	a[29] = 'Đ';
	a[30] = 'ư';
	a[31] = 'ợ';
	a[32] = 'c';
	a[33] = ' ';
	a[34] = 'k';
	a[35] = 'h';
	a[36] = 'ô';
	a[37] = 'n';
	a[38] = 'g';
	a[39] = '?';
	t = document.txt.value
	j = t.length
	if (j > 0) {
		for (var i = 1; i <= j; i++) {
			n = n + a[i]
			if (i == 29) {
				document.txt.value = ""
				n = ""
			}
		}
	}
	document.txt.value = n
	n = ""
	setTimeout("one()", 1)
}


