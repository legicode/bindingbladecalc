const stats = ["HP", "ATK", "SKL", "SPD", "LCK", "DEF", "RES", "CON", "MOV"];
const statsfull = ["HP", "Attack", "Skill", "Speed", "Luck", "Defense", "Resistance", "Constitution", "Movement"];

const characters = ["Roy", "Marcus", "Alen", "Lance", "Wolt", "Bors", "Merlinus", "Elen", "Dieck", "Ward", "Lot", "Shanna", "Chad", "Lugh", "Clarine", 
	"Rutger", "Rutger (HM)", "Saul", "Dorothy", "Sue", "Zelot", "Trec", "Noah", "Astolfo", "Lilina", "Ogier", "Barthe", "Gwendolyn", "Fir", "Fir (HM)", 
	"Sin", "Sin (HM)", "Geese", "Gonzalez", "Gonzalez (HM)", "Klein", "Klein (HM)", "Thea", "Thea (HM)", "Larum", "Elffin", "Echidna", "Bartre", "Raigh", 
	"Cath", "Cath (HM)", "Melady", "Melady (HM)", "Perceval", "Perceval (HM)", "Cecilia", "Sophia", "Igrene", "Garret", "Garret (HM)", "Fae", "Hugh", 
	"Zeiss", "Zeiss (HM)", "Douglas", "Niime", "Juno", "Dayan", "Yoder", "Karel", "Narcian", "Galle", "Hector", "Brunnya", "Murdock", "Eliwood", "Zephiel", "Guinivere"]

const charGrowths = new Map([
	["Roy", 			[80, 40, 50, 40, 60, 25, 30, 0, 0]],
	["Marcus", 			[60, 25, 20, 25, 20, 15, 20, 0, 0]],
	["Alen", 			[85, 45, 40, 45, 40, 25, 10, 0, 0]],
	["Lance", 			[80, 40, 45, 50, 35, 20, 15, 0, 0]],
	["Wolt", 			[80, 40, 45, 50, 35, 20, 15, 0, 0]],
	["Bors", 			[90, 30, 30, 40, 50, 35, 10, 0, 0]],
	["Merlinus", 		[100, 0, 50, 50,100, 20,  5, 0, 0]],
	["Elen", 			[45, 50, 30, 20, 70,  5, 60, 0, 0]],
	["Dieck", 			[90, 40, 40, 30, 35, 20, 15, 0, 0]],
	["Ward", 			[75, 50, 45, 20, 45, 30,  5, 0, 0]],
	["Lot",				[80, 30, 30, 35, 30, 40, 15, 0, 0]],
	["Shanna", 			[45, 30, 55, 60, 60, 10, 25, 0, 0]],
	["Chad", 			[85, 50, 50, 80, 60, 25, 15, 0, 0]],
	["Lugh", 			[50, 40, 50, 50, 35, 15, 30, 0, 0]],
	["Clarine", 		[40, 30, 40, 50, 65, 10, 40, 0, 0]],
	["Rutger", 			[80, 30, 60, 50, 30, 20, 20, 0, 0]],
	["Rutger (HM)", 	[80, 30, 60, 50, 30, 20, 20, 0, 0]],
	["Saul", 			[60, 40, 45, 45, 15, 15, 50, 0, 0]],
	["Dorothy", 		[85, 50, 45, 45, 35, 15, 15, 0, 0]],
	["Sue", 			[55, 30, 55, 65, 50, 10, 15, 0, 0]],
	["Zelot", 			[75, 25, 20, 20, 15, 30, 15, 0, 0]],
	["Trec", 			[85, 40, 30, 35, 50, 30,  5, 0, 0]],
	["Noah", 			[75, 30, 45, 30, 40, 30, 10, 0, 0]],
	["Astolfo", 		[90, 35, 40, 50, 15, 20, 20, 0, 0]],
	["Lilina", 			[45, 75, 20, 35, 50, 10, 35, 0, 0]],
	["Ogier", 			[85, 40, 30, 45, 55, 20, 15, 0, 0]],
	["Barthe", 			[100,60, 25, 20, 20, 40,  2, 0, 0]],
	["Gwendolyn", 		[85, 40, 40, 40, 45, 30, 10, 0, 0]],
	["Fir", 			[75, 25, 50, 55, 50, 15, 20, 0, 0]],
	["Fir (HM)", 		[75, 25, 50, 55, 50, 15, 20, 0, 0]],
	["Sin", 			[75, 45, 50, 50, 25, 10, 15, 0, 0]],
	["Sin (HM)", 		[75, 45, 50, 50, 25, 10, 15, 0, 0]],
	["Geese", 			[85, 50, 30, 40, 40, 20, 10, 0, 0]],
	["Gonzalez", 		[90, 50, 15, 50, 35, 25,  5, 0, 0]],
	["Gonzalez (HM)", 	[90, 50, 15, 50, 35, 25,  5, 0, 0]],
	["Klein", 			[60, 35, 40, 45, 50, 15, 25, 0, 0]],
	["Klein (HM)", 		[60, 35, 40, 45, 50, 15, 25, 0, 0]],
	["Thea", 			[60, 40, 45, 55, 40, 15, 20, 0, 0]],
	["Thea (HM)", 		[60, 40, 45, 55, 40, 15, 20, 0, 0]],
	["Larum", 			[70, 10,  5, 70, 80, 20, 30, 0, 0]],
	["Elffin", 			[80,  5,  5, 65, 65, 25, 55, 0, 0]],
	["Echidna", 		[75, 30, 25, 30, 20, 15, 15, 0, 0]],
	["Bartre", 			[70, 40, 20, 30, 20, 20,  5, 0, 0]],
	["Raigh", 			[55, 45, 55, 40, 15, 15, 35, 0, 0]],
	["Cath", 			[80, 40, 45, 85, 50, 15, 20, 0, 0]],
	["Cath (HM)", 		[80, 40, 45, 85, 50, 15, 20, 0, 0]],
	["Melady", 			[75, 50, 50, 45, 25, 20,  5, 0, 0]],
	["Melady (HM)", 	[75, 50, 50, 45, 25, 20,  5, 0, 0]],
	["Perceval", 		[75, 30, 25, 35, 20, 20, 10, 0, 0]],
	["Perceval (HM)", 	[75, 30, 25, 35, 20, 20, 10, 0, 0]],
	["Cecilia",			[60, 35, 45, 25, 25, 20, 25, 0, 0]],
	["Sophia",			[60, 55, 40, 30, 20, 20, 55, 0, 0]],
	["Igrene", 			[70, 35, 25, 35, 20, 10,  5, 0, 0]],
	["Garret", 			[70, 45, 25, 25, 15, 15,  5, 0, 0]],
	["Garret (HM)", 	[70, 45, 25, 25, 15, 15,  5, 0, 0]],
	["Fae", 			[130,90, 85, 65,150, 30, 50, 0, 0]],
	["Hugh", 			[75, 30, 30, 45, 25, 20, 15, 0, 0]],
	["Zeiss", 			[80, 60, 50, 35, 20, 25,  5, 0, 0]],
	["Zeiss (HM)", 		[80, 60, 50, 35, 20, 25,  5, 0, 0]],
	["Douglas", 		[60, 30, 30, 30, 20, 30,  5, 0, 0]],
	["Niime", 			[25, 15, 15, 15,  5, 15, 20, 0, 0]],
	["Juno", 			[50, 20, 35, 30, 45, 10, 10, 0, 0]],
	["Dayan", 			[55, 20, 20, 15, 20, 10, 10, 0, 0]],
	["Yoder", 			[20, 30, 15, 10, 20, 10, 20, 0, 0]],
	["Karel",			[210,130,140,140,120,110,100,0, 0]],
	["Narcian",			[85, 50, 10, 10, 30, 10,  5, 0, 0]],
	["Galle", 			[40, 20, 20, 15, 30, 30,  5, 0, 0]],
	["Hector", 			[85, 50, 10, 10, 30, 10,  5, 0, 0]],
	["Brunnya", 		[85, 50, 10, 10, 30, 10,  5, 0, 0]],
	["Murdock", 		[85, 50, 10, 10, 30, 10,  5, 0, 0]],
	["Eliwood", 		[60, 20, 30, 35, 25, 15,  5, 0, 0]],
	["Zephiel", 		[85, 50, 10, 10, 30, 10,  5, 0, 0]],
	["Guinivere", 		[60, 20, 30, 35, 25, 15,  5, 0, 0]]
]);

const charBases = new Map([
	["Roy", 			[ 1, 18,  5,  5,  7,  7,  5,  0,  6, 5]],
	["Marcus", 			[ 1, 32,  9, 14, 11, 10,  9,  8, 11, 8]],
	["Alen", 			[ 1, 21,  7,  4,  6,  3,  6,  0,  9, 7]],
	["Lance", 			[ 1, 21,  7,  4,  6,  3,  6,  0,  9, 7]],
	["Wolt", 			[ 1, 18,  4,  4,  5,  2,  4,  0,  7, 5]],
	["Bors", 			[ 1, 20,  7,  4,  3,  4, 11,  0, 14, 4]],
	["Merlinus", 		[ 1, 15,  0,  3,  3, 10,  3,  0, 25, 5]],
	["Elen", 			[ 2, 16,  1,  6,  8,  8,  0,  6,  4, 5]],
	["Dieck", 			[ 5, 26,  9, 12, 10,  5,  6,  1, 13, 5]],
	["Ward", 			[ 2, 28,  8,  3,  5,  4,  3,  0, 13, 5]],
	["Lot",				[ 3, 29,  7,  6,  7,  2,  4,  1, 12, 5]],
	["Shanna", 			[ 1, 17,  4,  6, 12,  5,  6,  5,  4, 7]],
	["Chad", 			[ 1, 16,  3,  3, 10,  4,  2,  0,  5, 6]],
	["Lugh", 			[ 1, 16,  4,  5,  6,  5,  3,  5,  4, 5]],
	["Clarine", 		[ 1, 15,  2,  5,  9,  8,  2,  5,  5, 7]],
	["Rutger", 			[ 4, 22,  7, 12, 13,  2,  5,  0,  7, 5]],
	["Rutger (HM)", 	[ 4, 26,  5, 14, 15,  4,  6,  1,  7, 5]],
	["Saul", 			[ 5, 20,  4,  6, 10,  2,  2,  5,  6, 5]],
	["Dorothy", 		[ 3, 19,  5,  6,  6,  3,  4,  2,  7, 5]],
	["Sue", 			[ 1, 18,  5,  7,  8,  4,  5,  0,  5, 7]],
	["Zelot", 			[ 1, 35, 10, 12, 13,  5, 11,  7, 11, 8]],
	["Trec", 			[ 4, 25,  8,  6,  7,  5,  8,  0,  9, 7]],
	["Noah", 			[ 7, 27,  8,  7,  9,  6,  7,  1, 10, 7]],
	["Astolfo", 		[10, 25,  7,  8, 15, 11,  7,  3,  8, 6]],
	["Lilina", 			[ 1, 16,  5,  5,  4,  4,  2,  7,  4, 5]],
	["Ogier", 			[ 3, 24,  7, 10,  9,  6,  4,  0,  8, 5]],
	["Barthe", 			[ 9, 25, 10,  6,  5,  2, 14,  1, 16, 4]],
	["Gwendolyn", 		[ 1, 19,  4,  3,  3,  6,  8,  1, 10, 4]],
	["Fir", 			[ 1, 19,  6,  9, 10,  3,  3,  1,  5, 5]],
	["Fir (HM)", 		[ 1, 25,  9, 12, 13,  5,  4,  2,  5, 5]],
	["Sin", 			[ 5, 24,  7,  8, 10,  6,  7,  0,  7, 7]],
	["Sin (HM)", 		[ 5, 29,  9, 11, 14,  8,  8,  1,  7, 7]],
	["Geese", 			[10, 33, 10,  9,  9,  9,  8,  0, 11, 5]],
	["Gonzalez", 		[ 5, 36, 12,  5,  9,  5,  6,  0, 15, 5]],
	["Gonzalez (HM)", 	[ 5, 43, 16,  7, 11,  6,  7,  1, 15, 5]],
	["Klein", 			[ 1, 27, 13, 13, 11, 10,  8,  6,  7, 6]],
	["Klein (HM)", 		[ 1, 33, 16, 16, 13, 13,  9,  7,  7, 6]],
	["Thea", 			[ 8, 22,  6,  8, 11,  3,  7,  6,  5, 7]],
	["Thea (HM)", 		[ 8, 28,  9, 12, 15,  6,  8,  8,  5, 7]],
	["Larum", 			[ 1, 14,  1,  2, 11,  9,  2,  4,  4, 5]],
	["Elffin", 			[ 1, 15,  1,  3, 10, 11,  4,  1,  6, 5]],
	["Echidna", 		[ 1, 35, 13, 19, 18,  6,  8,  7,  9, 6]],
	["Bartre", 			[ 2, 48, 22, 11, 10, 14, 10,  3, 14, 6]],
	["Raigh", 			[12, 23, 12,  9,  9,  6,  5, 10,  4, 5]],
	["Cath", 			[ 5, 16,  3,  7, 11,  8,  2,  1,  5, 6]],
	["Cath (HM)", 		[ 5, 20,  3, 11, 15, 12,  2,  3,  5, 6]],
	["Melady", 			[10, 30, 12, 11, 10,  5, 13,  3,  9, 7]],
	["Melady (HM)", 	[10, 38, 17, 15, 13,  8, 16,  4,  9, 7]],
	["Perceval", 		[ 5, 43, 17, 13, 18, 12, 14, 11, 12, 8]],
	["Perceval (HM)", 	[ 5, 51, 20, 16, 20, 15, 15, 13, 12, 8]],
	["Cecilia",			[ 1, 30, 11,  7, 10, 10,  7, 13,  6, 8]],
	["Sophia",			[ 1, 15,  6,  2,  4,  3,  1,  8,  3, 5]],
	["Igrene", 			[ 1, 32, 16, 18, 15,  9, 11, 10,  7, 6]],
	["Garret", 			[ 1, 49, 17, 13, 10, 12,  9,  4, 13, 6]],
	["Garret (HM)", 	[ 1, 55, 21, 16, 11, 14, 10,  5, 13, 6]],
	["Fae", 			[ 1, 16,  2,  2,  3,  7,  2,  6,  1, 5]],
	["Hugh", 			[15, 26, 13, 11, 12, 10,  9,  9,  7, 5]],
	["Zeiss", 			[ 7, 28, 14,  9,  8,  6, 12,  2, 10, 7]],
	["Zeiss (HM)", 		[ 7, 37, 19, 13, 11,  9, 15,  3, 10, 7]],
	["Douglas", 		[ 8, 46, 19, 13,  8, 11, 20,  5, 17, 5]],
	["Niime", 			[18, 25, 21, 20, 16, 15,  5, 18,  4, 6]],
	["Juno", 			[ 9, 33, 11, 14, 16, 14,  8, 12,  7, 8]],
	["Dayan", 			[12, 43, 14, 16, 20, 12, 10, 12,  9, 8]],
	["Yoder", 			[20, 35, 19, 18, 14, 11,  5, 30,  6, 6]],
	["Karel",			[19, 44, 20, 28, 23, 18, 15, 13,  9, 6]],
	["Narcian",			[20, 46, 16, 13, 16, 13, 20, 12, 11, 8]],
	["Galle", 			[20, 49, 22, 15, 13, 11, 22, 14, 12, 8]],
	["Hector", 			[20, 43, 18, 20, 10, 15, 30, 15, 20, 5]],
	["Brunnya", 		[20, 38, 23, 18, 18, 17, 18, 25,  6, 6]],
	["Murdock", 		[20, 60, 27, 19, 12, 12, 25, 17, 20, 5]],
	["Eliwood", 		[20, 48, 25, 20, 22, 14, 24, 15, 11, 8]],
	["Zephiel", 		[20, 60, 24, 20, 14, 15, 22, 24, 17, 5]],
	["Guinivere", 		[20, 29, 24, 24, 23, 24, 13, 25,  5, 6]]
]);

const promotionGains = new Map([
	["Roy", 			[4, 2, 3, 2, 0, 2, 5, 2, 1]],
	["Alen", 			[3, 2, 2, 2, 0, 2, 3, 2, 1]],
	["Lance", 			[3, 2, 2, 2, 0, 2, 3, 2, 1]],
	["Wolt", 			[3, 3, 3, 2, 0, 2, 2, 1, 1]],
	["Bors", 			[4, 3, 2, 3, 0, 4, 3, 2, 1]],
	["Elen", 			[3, 3, 3, 2, 0, 2, 3, 1, 1]],
	["Dieck", 			[4, 2, 1, 2, 0, 4, 2, 1, 1]],
	["Ward", 			[8, 3, 3, 2, 0, 3, 0, 2, 1]],
	["Lot",				[8, 3, 3, 2, 0, 3, 0, 2, 1]],
	["Shanna", 			[6, 2, 2, 2, 0, 2, 2, 1, 1]],
	["Lugh", 			[4, 4, 2, 1, 0, 2, 2, 1, 1]],
	["Clarine", 		[4, 3, 2, 2, 0, 2, 3, 1, 1]],
	["Rutger", 			[5, 2, 2, 1, 0, 3, 2, 1, 1]],
	["Rutger (HM)", 	[5, 2, 2, 1, 0, 3, 2, 1, 1]],
	["Saul", 			[3, 3, 3, 2, 0, 2, 3, 1, 1]],
	["Dorothy", 		[2, 3, 3, 3, 0, 2, 3, 1, 1]],
	["Sue", 			[6, 2, 1, 1, 0, 2, 4, 1, 1]],
	["Trec", 			[3, 2, 2, 2, 0, 2, 3, 2, 1]],
	["Noah", 			[3, 2, 2, 2, 0, 2, 3, 2, 1]],
	["Lilina", 			[3, 3, 3, 3, 0, 1, 2, 1, 1]],
	["Ogier", 			[4, 2, 1, 2, 0, 4, 2, 1, 1]],
	["Barthe", 			[4, 3, 2, 3, 0, 4, 3, 2, 1]],
	["Gwendolyn", 		[4, 4, 2, 4, 0, 3, 3, 1, 1]],
	["Fir", 			[4, 3, 2, 2, 0, 3, 2, 1, 1]],
	["Fir (HM)", 		[4, 3, 2, 2, 0, 3, 2, 1, 1]],
	["Sin", 			[5, 2, 2, 2, 0, 2, 3, 1, 1]],
	["Sin (HM)", 		[5, 2, 2, 2, 0, 2, 3, 1, 1]],
	["Geese", 			[5, 3, 4, 1, 0, 3, 0, 3, 1]],
	["Gonzalez", 		[4, 2, 5, 2, 0, 3, 0, 1, 1]],
	["Gonzalez (HM)", 	[4, 2, 5, 2, 0, 3, 0, 1, 1]],
	["Thea", 			[6, 2, 2, 2, 0, 2, 2, 1, 1]],
	["Thea (HM)", 		[6, 2, 2, 2, 0, 2, 2, 1, 1]],
	["Raigh", 			[3, 4, 2, 2, 0, 2, 2, 1, 1]],
	["Melady", 			[5, 2, 2, 2, 0, 2, 2, 1, 1]],
	["Melady (HM)", 	[5, 2, 2, 2, 0, 2, 2, 1, 1]],
	["Sophia",			[2, 4, 2, 3, 0, 2, 2, 1, 1]],
	["Hugh", 			[4, 4, 2, 1, 0, 2, 2, 1, 1]],
	["Zeiss", 			[5, 2, 2, 2, 0, 2, 1, 1, 1]],
	["Zeiss (HM)", 		[5, 2, 2, 2, 0, 2, 1, 1, 1]]
]);

const charCaps = new Map([
	["Unpromoted", 		[60, 20, 20, 20, 30, 20, 20, 20, 15]],
	["Roy", 			[60, 25, 25, 25, 30, 25, 25, 25, 15]],
	["Marcus", 			[60, 25, 28, 25, 30, 25, 25, 20, 15]],
	["Alen", 			[60, 25, 28, 25, 30, 25, 25, 20, 15]],
	["Lance", 			[60, 25, 28, 25, 30, 25, 25, 20, 15]],
	["Wolt", 			[60, 24, 30, 29, 30, 22, 23, 20, 15]],
	["Bors", 			[60, 27, 25, 21, 30, 30, 25, 20, 15]],
	["Merlinus", 		[60, 20, 20, 20, 30, 20, 20, 25, 15]],
	["Elen", 			[60, 26, 25, 26, 30, 21, 30, 20, 15]],
	["Dieck", 			[60, 25, 30, 26, 30, 25, 22, 20, 15]],
	["Ward", 			[60, 30, 26, 25, 30, 28, 20, 20, 15]],
	["Lot",				[60, 30, 26, 25, 30, 28, 20, 20, 15]],
	["Shanna", 			[60, 23, 25, 28, 30, 24, 28, 20, 15]],
	["Chad", 			[60, 20, 20, 20, 30, 20, 20, 20, 15]],
	["Lugh", 			[60, 28, 30, 25, 30, 20, 25, 20, 15]],
	["Clarine", 		[60, 27, 24, 25, 30, 24, 28, 20, 15]],
	["Rutger", 			[60, 24, 29, 30, 30, 22, 23, 20, 15]],
	["Rutger (HM)", 	[60, 24, 29, 30, 30, 22, 23, 20, 15]],
	["Saul", 			[60, 25, 26, 25, 30, 22, 30, 20, 15]],
	["Dorothy", 		[60, 23, 30, 29, 30, 21, 25, 20, 15]],
	["Sue", 			[60, 23, 28, 30, 30, 22, 25, 20, 15]],
	["Zelot", 			[60, 25, 28, 25, 30, 25, 25, 20, 15]],
	["Trec", 			[60, 25, 28, 25, 30, 25, 25, 20, 15]],
	["Noah", 			[60, 25, 28, 25, 30, 25, 25, 20, 15]],
	["Astolfo", 		[60, 20, 20, 20, 30, 20, 20, 20, 15]],
	["Lilina", 			[60, 30, 28, 25, 30, 20, 25, 20, 15]],
	["Ogier", 			[60, 25, 30, 26, 30, 25, 22, 20, 15]],
	["Barthe", 			[60, 27, 25, 21, 30, 30, 25, 20, 15]],
	["Gwendolyn", 		[60, 25, 25, 22, 30, 30, 26, 20, 15]],
	["Fir", 			[60, 22, 29, 30, 30, 22, 25, 20, 15]],
	["Fir (HM)", 		[60, 22, 29, 30, 30, 22, 25, 20, 15]],
	["Sin", 			[60, 24, 28, 30, 30, 23, 23, 20, 15]],
	["Sin (HM)", 		[60, 24, 28, 30, 30, 23, 23, 20, 15]],
	["Geese", 			[60, 30, 24, 28, 30, 22, 24, 20, 15]],
	["Gonzalez", 		[60, 30, 24, 28, 30, 22, 24, 20, 15]],
	["Gonzalez (HM)", 	[60, 30, 24, 28, 30, 22, 24, 20, 15]],
	["Klein", 			[60, 24, 30, 29, 30, 22, 23, 20, 15]],
	["Klein (HM)", 		[60, 24, 30, 29, 30, 22, 23, 20, 15]],
	["Thea", 			[60, 23, 25, 28, 30, 24, 28, 20, 15]],
	["Thea (HM)", 		[60, 23, 25, 28, 30, 24, 28, 20, 15]],
	["Larum", 			[60, 20, 20, 20, 30, 20, 20, 20, 15]],
	["Elffin", 			[60, 20, 20, 20, 30, 20, 20, 20, 15]],
	["Echidna", 		[60, 24, 30, 26, 30, 24, 24, 20, 15]],
	["Bartre", 			[60, 30, 26, 25, 30, 28, 20, 20, 15]],
	["Raigh", 			[60, 29, 24, 26, 30, 21, 28, 20, 15]],
	["Cath", 			[60, 20, 20, 20, 30, 20, 20, 20, 15]],
	["Cath (HM)", 		[60, 20, 20, 20, 30, 20, 20, 20, 15]],
	["Melady", 			[60, 25, 26, 23, 30, 29, 23, 22, 15]],
	["Melady (HM)", 	[60, 25, 26, 23, 30, 29, 23, 22, 15]],
	["Perceval", 		[60, 25, 28, 25, 30, 25, 25, 20, 15]],
	["Perceval (HM)", 	[60, 25, 28, 25, 30, 25, 25, 20, 15]],
	["Cecilia",			[60, 27, 24, 25, 30, 24, 28, 20, 15]],
	["Sophia",			[60, 29, 24, 26, 30, 20, 29, 20, 15]],
	["Igrene", 			[60, 23, 30, 29, 30, 21, 25, 20, 15]],
	["Garret", 			[60, 30, 24, 28, 30, 22, 24, 20, 15]],
	["Garret (HM)", 	[60, 30, 24, 28, 30, 22, 24, 20, 15]],
	["Fae", 			[60, 20, 20, 20, 30, 20, 20, 20, 15]],
	["Hugh", 			[60, 28, 30, 25, 30, 20, 25, 20, 15]],
	["Zeiss", 			[60, 26, 26, 23, 30, 30, 22, 21, 15]],
	["Zeiss (HM)", 		[60, 26, 26, 23, 30, 30, 22, 21, 15]],
	["Douglas", 		[60, 27, 25, 21, 30, 30, 25, 20, 15]],
	["Niime", 			[60, 29, 24, 26, 30, 20, 29, 20, 15]],
	["Juno", 			[60, 23, 25, 28, 30, 24, 28, 20, 15]],
	["Dayan", 			[60, 24, 28, 30, 30, 23, 23, 20, 15]],
	["Yoder", 			[60, 25, 26, 25, 30, 22, 30, 20, 15]],
	["Karel",			[60, 24, 29, 30, 30, 22, 23, 20, 15]],
	["Narcian",			[60, 26, 26, 23, 30, 30, 22, 21, 15]],
	["Galle", 			[60, 26, 26, 23, 30, 30, 22, 21, 15]],
	["Hector", 			[60, 27, 25, 21, 30, 30, 25, 20, 15]],
	["Brunnya", 		[60, 30, 28, 25, 30, 20, 25, 20, 15]],
	["Murdock", 		[60, 27, 25, 21, 30, 30, 25, 20, 15]],
	["Eliwood", 		[60, 25, 28, 25, 30, 25, 25, 20, 15]],
	["Zephiel", 		[60, 30, 30, 30, 30, 30, 30, 20, 15]],
	["Guinivere", 		[60, 30, 28, 25, 30, 20, 25, 20, 15]]
]);

function updateHit(){
	trueHitRate = ((displayedHit.value * (2 * displayedHit.value + 1) - (Math.abs(displayedHit.value - 50.5) / (displayedHit.value - 50.5) + 1) * ((displayedHit.value - 50) * (2 * displayedHit.value - 99))) / 100).toString() + "%";
	spaces = 1.75*(6 - trueHitRate.length);
	if (displayedHit.value == 100){
		spaces -= 1;
	}
	for (let i = 0; i < spaces; i++){
		trueHitRate += "&nbsp";
	}
	trueHit.innerHTML = trueHitRate;
}

function updateEXP(){
	let playerPower = 3;
	if (playerType.selectedIndex == 2){
		playerPower = 2;
	}
	else if (playerType.selectedIndex == 4){
		playerPower = 1;
	}
	let expGain = Math.max(Math.floor((31 + enemyLevel.value * 1 - playerLevel.value * 1) / (playerPower)), 1);
	if (killEXP.checked){
		let playerBonus = 0;
		if (playerType.selectedIndex == 1){
			playerBonus = 60;
		}
		else if (playerType.selectedIndex == 3 || playerType.selectedIndex == 5){
			playerBonus = 40;
		}
		let enemyPower = 3;
		let enemyBonus = 0;
		let thiefEXP = 0;
		if (enemyType.selectedIndex == 1){
			enemyBonus = 60;
		}
		else if (enemyType.selectedIndex == 2){
			enemyPower = 2;
			thiefEXP = 20;
		}
		else if (enemyType.selectedIndex == 3){
			enemyBonus = 40;
			thiefEXP = 20;
		}
		else if (enemyType.selectedIndex == 4){
			enemyPower = 2;
		}
		else if (enemyType.selectedIndex == 5){
			enemyBonus = 40;
		}
		else if (enemyType.selectedIndex == 6){
			enemyPower = 5;
			bossEXP.checked = true;
			enemyLevel.selectedIndex = 0;
		}
		expGain += Math.max(Math.floor(((enemyLevel.value * enemyPower + enemyBonus) - (playerLevel.value * playerPower + playerBonus) + 20 + thiefEXP + bossEXP.checked * 40)), 0);
		expGain = Math.min(expGain, 100);
	}
	exp.innerHTML = expGain + " EXP";
}

function updateCharacter(){
	if (character.value != "Merlinus"){
		if (promotionLevel.length == 1){
			promotionLevel.remove(0);
			for (let i = 20; i >= 10; i--){
				promotionLevel[20-i] = new Option(i);
			}
		}
	}
	else{
		while (promotionLevel.length > 0){
			promotionLevel.remove(0);
		}
		promotionLevel[0] = new Option(19);
	}
	updateTable();
}

function updateTable(){
	char = character.value;
	var growthsTable = document.getElementById("growthsTable");
	while (growthsTable.rows.length > 2){
		growthsTable.deleteRow(1);
	}
	let capFormat = "b";
	if (growthsMode.selectedIndex == 1){
		capFormat = "u";
	}
	row = growthsTable.insertRow(1);
	level = row.insertCell(0).innerHTML = "<b>Base stats</b>";
	hp = row.insertCell(1).innerHTML = "<span id=\"BaseHP\"></span>";
	atk = row.insertCell(2).innerHTML = "<span id=\"BaseATK\"></span>";
	skl = row.insertCell(3).innerHTML = "<span id=\"BaseSKL\"></span>";
	spd = row.insertCell(4).innerHTML = "<span id=\"BaseSPD\"></span>";
	lck = row.insertCell(5).innerHTML = "<span id=\"BaseLCK\"></span>";
	def = row.insertCell(6).innerHTML = "<span id=\"BaseDEF\"></span>";
	res = row.insertCell(7).innerHTML = "<span id=\"BaseRES\"></span>";
	con = row.insertCell(8).innerHTML = "<span id=\"BaseCON\"></span>";
	mov = row.insertCell(9).innerHTML = "<span id=\"BaseMOV\"></span>";
	for (let i = 0; i < 9; i++){
		this["Base"+(stats[i])].innerHTML = charBases.get(char)[i+1];
	}
	currentHP = charBases.get(char)[1];
	currentATK = charBases.get(char)[2];
	currentSKL = charBases.get(char)[3];
	currentSPD = charBases.get(char)[4];
	currentLCK = charBases.get(char)[5];
	currentDEF = charBases.get(char)[6];
	currentRES = charBases.get(char)[7];
	currentCON = charBases.get(char)[8];
	currentMOV = charBases.get(char)[9];
	if (promotionGains.get(char) != undefined){
		let baseLevel = charBases.get(char)[0];
		for (let i = baseLevel-1; i < promotionLevel.value - 1; i++){
			row = growthsTable.insertRow(growthsTable.rows.length - 1);
			let level = row.insertCell(0).innerHTML = (i+1).toString() + " → " + (i+2).toString();
			let hp = row.insertCell(1).innerHTML = "<span id=\"level"+(i+2).toString()+"HP\"></span>";
			let atk = row.insertCell(2).innerHTML = "<span id=\"level"+(i+2).toString()+"ATK\"></span>";
			let skl = row.insertCell(3).innerHTML = "<span id=\"level"+(i+2).toString()+"SKL\"></span>";
			let spd = row.insertCell(4).innerHTML = "<span id=\"level"+(i+2).toString()+"SPD\"></span>";
			let lck = row.insertCell(5).innerHTML = "<span id=\"level"+(i+2).toString()+"LCK\"></span>";
			let def = row.insertCell(6).innerHTML = "<span id=\"level"+(i+2).toString()+"DEF\"></span>";
			let res = row.insertCell(7).innerHTML = "<span id=\"level"+(i+2).toString()+"RES\"></span>";
			let con = row.insertCell(8).innerHTML = "<span id=\"level"+(i+2).toString()+"CON\"></span>";
			let mov = row.insertCell(9).innerHTML = "<span id=\"level"+(i+2).toString()+"MOV\"></span>";
			for (let j = 0; j < 9; j++){
				let statIncrease = 0;
				let baseCaps = "Unpromoted";
				if (this["current"+stats[j]] < charCaps.get(char)[j]){
					if (growthsMode.selectedIndex == 0){
						statIncrease = charGrowths.get(char)[j] / 100;
					}
					else {
						statIncrease = Math.round((i+1) * charGrowths.get(char)[j] / 100) - Math.round(i * charGrowths.get(char)[j] / 100);
					}
					if (this["current"+stats[j]] + statIncrease > charCaps.get(char)[j]){
						statIncrease = charCaps.get(char)[j] - this["current"+stats[j]];
					}
				}
				this["current"+stats[j]] += statIncrease;
				this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;
				this["level"+(i+2).toString()+stats[j]].innerHTML = this["current"+stats[j]];
				if (this["current"+stats[j]] >= charCaps.get(char)[j]){
					this["level"+(i+2).toString()+stats[j]].innerHTML = "<"+capFormat+">" + this["level"+(i+2).toString()+stats[j]].innerHTML + "<"+capFormat+">";
				}
				if (growthsMode.selectedIndex == 1){
					if (statIncrease >= 1){
						this["level"+(i+2).toString()+stats[j]].innerHTML = "<b>" + this["level"+(i+2).toString()+stats[j]].innerHTML + "<b>";
					}
					if (statIncrease >= 2){
						this["level"+(i+2).toString()+stats[j]].innerHTML = "<i>" + this["level"+(i+2).toString()+stats[j]].innerHTML + "<i>";
					}
				}
			}
		}
		currentHP += promotionGains.get(char)[0];
		currentATK += promotionGains.get(char)[1];
		currentSKL += promotionGains.get(char)[2];
		currentSPD += promotionGains.get(char)[3];
		currentLCK += promotionGains.get(char)[4];
		currentDEF += promotionGains.get(char)[5];
		currentRES += promotionGains.get(char)[6];
		currentCON += promotionGains.get(char)[7];
		currentMOV += promotionGains.get(char)[8];
		row = growthsTable.insertRow(growthsTable.rows.length - 1);
		let level = row.insertCell(0).innerHTML = "<b>Promotion</b>";
		let hp = row.insertCell(1).innerHTML = "<"+capFormat+">"+Math.round(currentHP * 100) / 100+"</"+capFormat+">";
		let atk = row.insertCell(2).innerHTML = "<"+capFormat+">"+Math.round(currentATK * 100) / 100+"</"+capFormat+">";
		let skl = row.insertCell(3).innerHTML = "<"+capFormat+">"+Math.round(currentSKL * 100) / 100+"</"+capFormat+">";
		let spd = row.insertCell(4).innerHTML = "<"+capFormat+">"+Math.round(currentSPD * 100) / 100+"</"+capFormat+">";
		let lck = row.insertCell(5).innerHTML = "<"+capFormat+">"+Math.round(currentLCK * 100) / 100+"</"+capFormat+">";
		let def = row.insertCell(6).innerHTML = "<"+capFormat+">"+Math.round(currentDEF * 100) / 100+"</"+capFormat+">";
		let res = row.insertCell(7).innerHTML = "<"+capFormat+">"+Math.round(currentRES * 100) / 100+"</"+capFormat+">";
		let con = row.insertCell(8).innerHTML = "<"+capFormat+">"+Math.round(currentCON * 100) / 100+"</"+capFormat+">";
		let mov = row.insertCell(9).innerHTML = "<"+capFormat+">"+Math.round(currentMOV * 100) / 100+"</"+capFormat+">";
	}
	let baseLevel = 1;
	if (promotionGains.get(char) == undefined){
		baseLevel = charBases.get(char)[0];
	}
	let levelCap = 20;
	for (let i = baseLevel-1; i < levelCap - 1; i++){
		row = growthsTable.insertRow(growthsTable.rows.length - 1);
		let level = row.insertCell(0).innerHTML = (i+1).toString() + " → " + (i+2).toString();
		let hp = row.insertCell(1).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"HP\"></span>";
		let atk = row.insertCell(2).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"ATK\"></span>";
		let skl = row.insertCell(3).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"SKL\"></span>";
		let spd = row.insertCell(4).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"SPD\"></span>";
		let lck = row.insertCell(5).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"LCK\"></span>";
		let def = row.insertCell(6).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"DEF\"></span>";
		let res = row.insertCell(7).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"RES\"></span>";
		let con = row.insertCell(8).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"CON\"></span>";
		let mov = row.insertCell(9).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"MOV\"></span>";
		for (let j = 0; j < 9; j++){
			let statIncrease = 0;
			if (this["current"+stats[j]] < charCaps.get(char)[j]){
				if (growthsMode.selectedIndex == 0){
					statIncrease = charGrowths.get(char)[j] / 100;
				}
				else {
					statIncrease = Math.round((i+1) * charGrowths.get(char)[j] / 100) - Math.round(i * charGrowths.get(char)[j] / 100);
				}
				if (this["current"+stats[j]] + statIncrease > charCaps.get(char)[j]){
					statIncrease = charCaps.get(char)[j] - this["current"+stats[j]];
				}
			}
			this["current"+stats[j]] += statIncrease;
			this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;
			this["Plevel"+(i+2).toString()+stats[j]].innerHTML = this["current"+stats[j]];
			if (this["current"+stats[j]] >= charCaps.get(char)[j]){
				this["Plevel"+(i+2).toString()+stats[j]].innerHTML = "<"+capFormat+">" + this["Plevel"+(i+2).toString()+stats[j]].innerHTML + "<"+capFormat+">";
			}
			if (growthsMode.selectedIndex == 1){
				if (statIncrease >= 1){
					this["Plevel"+(i+2).toString()+stats[j]].innerHTML = "<b>" + this["Plevel"+(i+2).toString()+stats[j]].innerHTML + "<b>";
				}
				if (statIncrease >= 2){
					this["Plevel"+(i+2).toString()+stats[j]].innerHTML = "<i>" + this["Plevel"+(i+2).toString()+stats[j]].innerHTML + "<i>";
				}
			}
		}
	}
}

var displayedHit = document.getElementById("displayedHit");
var trueHit = document.getElementById("trueHit");
for (let i = 0; i <= 100; i++){
	displayedHit[i] = new Option(100-i);
}
displayedHit.selectedIndex = 25;
updateHit();

var playerLevel = document.getElementById("playerLevel");
var enemyLevel = document.getElementById("enemyLevel");
var playerType = document.getElementById("playerType");
var enemyType = document.getElementById("enemyType");
var killEXP = document.getElementById("killEXP");
var bossEXP = document.getElementById("bossEXP");
var exp = document.getElementById("exp");
for (let i = 0; i < 40; i++){
	playerLevel[i] = new Option(40-i);
	enemyLevel[i] = new Option(40-i);
}
playerLevel.selectedIndex = 20;
enemyLevel.selectedIndex = 20;
playerType.selectedIndex = 0;
enemyType.selectedIndex = 0;
killEXP.checked = true;
bossEXP.checked = false;
updateEXP();

var character = document.getElementById("character");
var promotionLevel = document.getElementById("promotionLevel");
var promotionClass = document.getElementById("promotionClass");
var growthsMode = document.getElementById("growthsMode");
growthsMode.selectedIndex = 0;
for (let i = 0; i < characters.length; i++){
	character[i] = new Option(characters[i]);
}
for (let i = 20; i >= 10; i--){
	promotionLevel[20-i] = new Option(i);
}
updateCharacter();