
//        CAMPIONATO.gironi = JSON.parse(stgironi);   

/*
https://api.chess.com/pub/club/team-toscana
https://api.chess.com/pub/club/team-abruzzo
https://api.chess.com/pub/club/i-lumbard
https://api.chess.com/pub/club/team-piemonte
https://api.chess.com/pub/club/team-veneto
https://api.chess.com/pub/club/team-sicilia
https://api.chess.com/pub/club/udine-e-fvg
https://api.chess.com/pub/club/team-trentino-sudtirol
https://api.chess.com/pub/club/team-napoli-campania 
https://api.chess.com/pub/club/lazio
https://api.chess.com/pub/club/team-emilia-romagna
https://api.chess.com/pub/club/team-basilicata
https://api.chess.com/pub/club/team-calabria

*/
var calcolaClassificaRun = false;
var classificaTeams = [];

var bannati = [];

var albo = [];
albo[8]={"stagione":"2019-2020","primo":"udine-e-fvg", "secondo":"team-emilia-romagna", "terzo": "team-toscana"};
albo[9]={"stagione":"2017-2018","primo":"team-emilia-romagna", "secondo":"udine-e-fvg", "terzo": "i-lumbard"};
albo[10]={"stagione":"2014-2015","primo":"i-lumbard", "secondo":"team-toscana", "terzo": "team-sicilia"};

var teams = [];
teams['team-toscana']={"name":"Team Toscana", "icon":"https://images.chesscomfiles.com/uploads/v1/group/6814.6e1f2b90.50x50o.652227079b62.gif","url":"https://www.chess.com/club/team-toscana","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['team-abruzzo']={"name":"Team Abruzzo", "icon":"https://images.chesscomfiles.com/uploads/v1/group/27050.c7489c95.50x50o.56bd17b73aad.gif","url":"https://www.chess.com/club/team-abruzzo","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['i-lumbard']={"name":"I LUMBARD", "icon":"https://images.chesscomfiles.com/uploads/v1/group/16056.48d4e7ff.50x50o.18061584d1fd.jpg","url":"https://www.chess.com/club/i-lumbard","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['team-piemonte']={"name":"Team Piemonte", "icon":"https://images.chesscomfiles.com/uploads/v1/group/27066.4baa88c6.50x50o.558e34ad0072.gif","url":"https://www.chess.com/club/team-piemonte","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['team-veneto']={"name":"Team Veneto", "icon":"https://images.chesscomfiles.com/uploads/v1/group/27074.54dee974.50x50o.01648245b9bb.gif","url":"https://www.chess.com/club/team-veneto","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['team-sicilia']={"name":"Team Sicilia", "icon":"https://images.chesscomfiles.com/uploads/v1/group/5514.8438307c.50x50o.885a60f455da.png","url":"https://www.chess.com/club/team-sicilia","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['udine-e-fvg']={"name":"Udine e FVG", "icon":"https://images.chesscomfiles.com/uploads/v1/group/41872.ca4f33d5.50x50o.04a7832adeab.jpeg","url":"https://www.chess.com/club/udine-e-fvg","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['team-trentino-sudtirol']={"name":"Team Trentino-Südtirol", "icon":"https://images.chesscomfiles.com/uploads/v1/group/75676.7a5fc7bb.50x50o.a003bcd4acad.png","url":"https://www.chess.com/club/team-trentino-sudtirol","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['team-napoli-campania']={"name":"Team Napoli-Campania", "icon":"https://images.chesscomfiles.com/uploads/v1/group/20674.920ec37d.50x50o.0ac20c68644c.jpeg","url":"https://www.chess.com/club/team-napoli-campania","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['lazio']={"name":"Lazio", "icon":"https://images.chesscomfiles.com/uploads/v1/group/79686.ccc20114.50x50o.3f48ffa1aab6.jpeg","url":"https://www.chess.com/club/lazio","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['team-emilia-romagna']={"name":"Team Emilia-Romagna", "icon":"https://images.chesscomfiles.com/uploads/v1/group/27062.b57d956f.50x50o.0cc5fe4be2cf.png","url":"https://www.chess.com/club/team-emilia-romagna","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['team-basilicata']={"name":"Team Basilicata", "icon":"https://images.chesscomfiles.com/uploads/v1/group/27048.6209b951.50x50o.d3f2039045fd.gif","url":"https://www.chess.com/club/team-basilicata","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};
teams['team-calabria']={"name":"Team Calabria", "icon":"https://images.chesscomfiles.com/uploads/v1/group/4648.71d067f8.50x50o.0334e256f9c2.jpeg","url":"https://www.chess.com/club/team-calabria","puntiTotali":0,"puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "teamVinte" : [], "teamPatte" : [], "albo1":0, "albo2":0, "albo3":0, "puntiAlbo":0, "posizioneAlbo":0};



var matchs = [];
//1 - Dicembre
//1	Toscana	-	Abruzzo	Vedi sfida		-	
matchs[11] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1062972", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//1	Lombardia	-	Piemonte	Vedi sfida		-	
matchs[12] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1063810", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//1	Sicilia	-	Veneto	Vedi sfida	14.5	-	5.5
matchs[13] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1062564", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//1	Friuli-Venezia Giulia	-	Trentino-Südtirol	Vedi sfida		-	
matchs[14] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1063278", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//1	Campania	-	Lazio	Vedi sfida	1	-	5
matchs[15] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064026", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//1	Emilia-Romagna	-	Basilicata	Vedi sfida		-	
matchs[16] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1065988", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

//2 - Gennaio
//2	Sicilia	-	Toscana	Vedi sfida		-	
matchs[21] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1062830", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//2	Friuli-Venezia Giulia	-	Calabria	Vedi sfida		-	
matchs[22] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1065224", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//2	Campania	-	Abruzzo	Vedi sfida	3	-	5
matchs[23] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064118", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//2	Emilia-Romagna	-	Piemonte	Vedi sfida		-	
matchs[24] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1072794", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//2	Basilicata	-	Veneto	Vedi sfida		-	
matchs[25] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064334", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//2	Lazio	-	Trentino-Südtirol	Vedi sfida		-	
matchs[26] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1070308", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

//3 - Febbraio
//3	Emilia-Romagna	-	Friuli-Venezia Giulia	Vedi sfida		-	
matchs[31] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1082636", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//3	Basilicata	-	Sicilia	Vedi sfida		-	
matchs[32] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1073816", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//3	Lazio	-	Lombardia	Vedi sfida		-	
matchs[33] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064342", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//3	Trentino-Südtirol	-	Toscana	Vedi sfida		-	
matchs[34] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1081376", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//3	Veneto	-	Calabria	Vedi sfida		-	
matchs[35] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064606", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//3	Piemonte	-	Abruzzo	Vedi sfida		-	
matchs[36] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1083946", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

//4 - Marzo
//4	Trentino-Südtirol	-	Basilicata	Vedi sfida		-	
matchs[41] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1092118", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//4	Veneto	-	Emilia-Romagna
matchs[42] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1092372", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//4	Piemonte	-	Campania	Vedi sfida		-	
matchs[43] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1092130", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//4	Abruzzo	-	Friuli-Venezia Giulia			-	
matchs[44] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1092238", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//4	Calabria	-	Sicilia	Vedi sfida		-	
matchs[45] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1066022", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//4	Toscana	-	Lombardia	Vedi sfida		-	
matchs[46] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1062872", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

/*
//5 Aprile
//5	Basilicata	-	Campania	Vedi sfida		-	
matchs[51] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064338", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//5	Lazio	-	Friuli-Venezia Giulia			-	
matchs[52] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//5	Trentino-Südtirol	-	Sicilia			-	
matchs[53] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1092518", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//5	Veneto	-	Lombardia	Vedi sfida		-	
matchs[54] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1063968", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//5	Piemonte	-	Toscana	Vedi sfida		-	
matchs[55] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1063338", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//5	Abruzzo	-	Calabria	Vedi sfida		-	
matchs[56] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1097900", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

//6 - Maggio
//6	Lombardia	-	Calabria	Vedi sfida		-	
matchs[61] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//6	Sicilia	-	Abruzzo			-	
matchs[62] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1081340", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//6	Friuli-Venezia Giulia	-	Piemonte			-	
matchs[63] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//6	Campania	-	Veneto			-	
matchs[64] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//6	Emilia-Romagna	-	Trentino-Südtirol			-	
matchs[65] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//6	Basilicata	-	Lazio			-	
matchs[66] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

//7 - Giugno
//7	Campania	-	Sicilia	Vedi sfida		-	
matchs[71] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064002", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//7	Emilia-Romagna	-	Lombardia	Vedi sfida		-	
matchs[71] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1063990", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//7	Basilicata	-	Toscana	Vedi sfida		-	
matchs[73] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1062860", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//7	Lazio	-	Calabria	Vedi sfida		-	
matchs[74] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//7	Trentino-Südtirol	-	Abruzzo			-	
matchs[75] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//7	Veneto	-	Piemonte			-	
matchs[76] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

//8 - Luglio
//8	Piemonte	-	Trentino-Südtirol			-	
matchs[81] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//8	Abruzzo	-	Lazio			-	
matchs[82] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//8	Calabria	-	Basilicata	Vedi sfida		-	
matchs[83] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//8	Toscana	-	Emilia-Romagna	Vedi sfida		-	
matchs[84] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1062864", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//8	Lombardia	-	Campania	Vai alla sfida		-	
matchs[85] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1063864", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//8	Sicilia	-	Friuli-Venezia Giulia			-	
matchs[86] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1081200", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

//9 - Agosto
//9	Abruzzo	-	Veneto			-	
matchs[91] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//9	Calabria	-	Trentino-Südtirol			-	
matchs[92] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//9	Toscana	-	Lazio	Vedi sfida		-	
matchs[93] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064340", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//9	Lombardia	-	Basilicata	Vai alla sfida		-	
matchs[94] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064024", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//9	Sicilia	-	Emilia-Romagna			-	
matchs[95] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1081354", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//9	Friuli-Venezia Giulia	-	Campania	Vedi sfida		-	
matchs[96] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1065230", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

//10 - Settembre
//10	Lazio	-	Emilia-Romagna			-	
matchs[101] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//10	Trentino-Südtirol	-	Campania
matchs[102] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//10	Veneto	-	Friuli-Venezia Giulia			-	
matchs[103] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//10	Piemonte	-	Sicilia			-	
matchs[104] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1089428", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//10	Abruzzo	-	Lombardia	Vedi sfida		-	
matchs[105] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064116", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//10	Calabria	-	Toscana	Vedi sfida		-	
matchs[106] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

//11 - Ottobre
//11	Calabria	-	Piemonte			-	
matchs[111] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//11	Toscana	-	Veneto	Vedi sfida		-	
matchs[112] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1063970", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//11	Lombardia	-	Trentino-Südtirol			-	
matchs[113] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//11	Sicilia	-	Lazio	Vedi sfida		-	
matchs[114] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1073326", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//11	Friuli-Venezia Giulia	-	Basilicata			-	
matchs[115] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//11	Campania	-	Emilia-Romagna	Vedi sfida		-	
matchs[116] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064190", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

//12 - Novembre
//12	Friuli-Venezia Giulia	-	Lombardia	Vedi sfida		-	
matchs[121] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1065232", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//12	Campania	-	Toscana	Vedi sfida		-	
matchs[122] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1063872", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//12	Emilia-Romagna	-	Calabria	Vedi sfida		-	
matchs[123] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//12	Basilicata	-	Abruzzo			-	
matchs[124] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//12	Lazio	-	Piemonte			-	
matchs[125] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//12	Trentino-Südtirol	-	Veneto			-	
matchs[126] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};

//13 - dicembre
//13	Veneto	-	Lazio			-	
matchs[131] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//13	Piemonte	-	Basilicata			-	
matchs[132] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//13	Abruzzo	-	Emilia-Romagna			-	
matchs[133] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//13	Calabria	-	Campania	Vedi sfida		-	
matchs[134] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//13	Toscana	-	Friuli-Venezia Giulia	Vedi sfida		-	
matchs[135] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1065228", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
//13	Lombardia	-	Sicilia	Vai alla sfida		-	
matchs[136] = {"penalità1":0,"penalità2":0,"id":"https://api.chess.com/pub/match/1064192", "daCaricare":true, "punti1":0, "punti2":0, "concluso": false};
*/

function elabora() {
    //Carico i dati di tutti i match
    for (var i in matchs) {
        caricaMatch(i, matchs[i].id);
    };
}

function caricaMatch(index, url)
{
    //Leggo i dati 
    $.getJSON(url,function(data){

        if (data.status != 'registration') 
        {
            //leggo team
            var team1 = data.teams.team1.url.substr(27, data.teams.team1.url.length-27);
            var team2 = data.teams.team2.url.substr(27, data.teams.team2.url.length-27);
            //Aggiorno partite
            matchs[index].url = data.url;
            matchs[index].boards = data.boards;
            matchs[index].team1 = team1;
            matchs[index].team2 = team2;
            matchs[index].score1 = data.teams.team1.score;
            matchs[index].score2 = data.teams.team2.score;
            if (data.teams.team1.score > data.teams.team2.score) 
            {
                matchs[index].punti1 ++;
                teams[team1].teamVinte.push(team2);
                teams[team1].puntiTotali ++;
            }    
            if (data.teams.team1.score < data.teams.team2.score) 
            {
                matchs[index].punti2 ++;
                teams[team2].teamVinte.push(team1);
                teams[team2].puntiTotali ++;
            }    
            if (data.teams.team1.score == data.teams.team2.score) {
                matchs[index].punti1 += 0.5;   
                matchs[index].punti2 += 0.5;
                teams[team1].teamPatte.push(team2);
                teams[team2].teamPatte.push(team1);
                teams[team1].puntiTotali += 0.5;
                teams[team2].puntiTotali += 0.5;
            } 

            //Se terminata anche matematicamente
            if (matchs[index].boards * 2 == matchs[index].score1 + matchs[index].score2 || matchs[index].boards < matchs[index].score1 || matchs[index].boards < matchs[index].score2)
            {
                matchs[index].concluso = true;   //Per colore in tabella
                teams[team1].matchConclusi ++;   //???????? servono
                teams[team2].matchConclusi ++;
                //Aggiorno punti solo conclusi
                teams[team1].puntiConclusi += matchs[index].punti1;  
                teams[team2].puntiConclusi += matchs[index].punti2;
            }
            //Controllo giocatori
            var username1 = '';
            var username2 = '';
            var risultato = '';
            for (var i in data.teams.team1.players) {
                username1 = data.teams.team1.players[i].username;
                username2 = data.teams.team2.players[i].username;
                //Se partita terminata calcolo punteggio
                //I GIOCATORI NON SONO ABBINATI. Con questi dati non posso 
                //  calcolare tie-break
                risultato = data.teams.team1.players[i].played_as_white;
                setPunti(username1, risultato);
                risultato = data.teams.team1.players[i].played_as_black;
                setPunti(username1, risultato);
                risultato = data.teams.team2.players[i].played_as_white;
                setPunti(username2, risultato);
                risultato = data.teams.team2.players[i].played_as_black;
                setPunti(username2, risultato);
            }
        }

        //Se ho caricato tutti i dati calcolo la classifica
        matchs[index].daCaricare = false;
        for (var i in matchs) {
            if (matchs[i].daCaricare) {
                return;
            }
        }
        
        //controllo di non aver già lanciato fase sucessiva
        if (calcolaClassificaRun)
            return;  
            calcolaClassificaRun = true;

        //Calcolo la classifica dei team
        calcolaClassifica();
  
    
    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        //Se responseJSON non è valorizzato solo se il record esiste    
        if (! jqXhr.responseJSON)
        {
            console.log('ERRORE ricarico dati: ' + this.url);
            var index = 0;
                for (var i in matchs) {
                    if (matchs[i].url = this.url)
                        index = i;
                };
                caricaMatch(index, this.url);    
            } else {
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
            }
              
        });
};

//calcolo classifica team
function calcolaClassifica()
{
    //calcolo punti spareggio
    for (var nameTeam in teams)
    {
        for (var i in teams[nameTeam].teamVinte)
            teams[nameTeam].puntiSpareggio += teams[teams[nameTeam].teamVinte[i]].puntiTotali;
        for (var i in teams[nameTeam].teamPatte)
            teams[nameTeam].puntiSpareggio += teams[teams[nameTeam].teamPatte[i]].puntiTotali / 2;
    }

    //Imposto posizione e salvo
    var gruppo = '';
    var max = -1;
    var maxSpareggio = 0;
    var posizione = 0;
    var oldMax = -1;
    var oldSpareggio = -1;
    var nPareggi = 0;
    var puntiClassifica = 0;
    while (max > -100)
    {
        max = -200;
        maxSpareggio = -1;
        for (var i in teams)
        {
            //Scelgo i punti (da conclusi oi in corso)
            puntiClassifica = teams[i].puntiTotali;

            if ((teams[i].posizione == 0) && (puntiClassifica > max || (puntiClassifica == max) && teams[i].puntiSpareggio > maxSpareggio)) {
                gruppo = i;
                max = puntiClassifica;
                maxSpareggio = teams[i].puntiSpareggio;
            }
        }
        if (max > -100) 
        {
            if (oldMax == max && oldSpareggio == maxSpareggio )
            {
                nPareggi++;
            } else {
                posizione++;
                posizione += nPareggi;
                nPareggi = 0;
                oldMax = max;
                oldSpareggio = maxSpareggio;
            }    
            teams[gruppo].posizione = posizione;
            //Aggiungo il team nella posizione corretta
            classificaTeams.push(gruppo);
        }
    }

    //Stampo la classifica
    var url  = '';
    var stile = '';
    var stileTD = '';
    var gruppoAvversario = '';
    var risultato = '';
    var boards = '';
    var score1 = 0;
    var score2 = 0;
    var partitaConclusa = false;
    //Riga con nomi teams    
    var stRiga = '<tr class="classifica-nameTeam">' +
            '<td style="background-color:gray;"></td><td style="background-color:gray;"></td><td style="background-color:gray;">' + 
            //'</td><td style="background-color:gray;">'+
            '</td><td style="background-color:gray;"></td></td><td style="background-color:gray;"></td></td><td style="background-color:gray;"></td>' +
            '<td class="classifica-col1SEP"></td>'; 
    for (var i in classificaTeams)         
        stRiga += '<td class="classifica-nameTeam"> <a style="color:black;text-decoration: none;font-weight: normal;" href="' + teams[classificaTeams[i]].url + '" target=”_blank”> ' + teams[classificaTeams[i]].name + '</a></td>';
    stRiga += '</tr>'
    $("#classifica").append(stRiga);
    //Riga con Icone    
    stRiga = '<tr class="classifica-icon">' +
            '<td class="classifica-icon" style="background-color:#E2E2FF;">Pos.</td> <td style="background-color:#E2E2FF;">Team</td><td style="background-color:#E2E2FF;"></td>'+
            '<td class="classifica-icon">Punti</td>' +
            '<td class="classifica-icon">Tie Break <BR> <spam style="font-weight: bold !important;"> NON valido per classifica ufficiale</spam> </td>'+
            '<td class="classifica-icon">Punti dai match conclusi</td>' +
            '<td class="classifica-col1SEP"></td>'; 
    for (var i in classificaTeams)         
        stRiga += '<td  class="classifica-icon">  <img class="classifica-avatar" src="' + teams[classificaTeams[i]].icon + '">';
    stRiga += '</tr>'
    $("#classifica").append(stRiga);
    //Riga team
    for (var i in classificaTeams)         
    {
        gruppo = classificaTeams[i];
        stRiga = '<tr class="classifica-risultati">' +
            '<td class="classifica-risultati">' + teams[gruppo].posizione + '</td>' +
            '<td class="classifica-risultati" style="border: 0px;"> <a style="color:black;text-decoration: none;font-weight: normal;" href="' + teams[classificaTeams[i]].url + '" target=”_blank”> ' + teams[classificaTeams[i]].name + '</a></td>' +
            '<td class="classifica-risultati" style="border: 0px;"> <img class="classifica-avatar" src="' + teams[classificaTeams[i]].icon + '"></td>' +
            '<td class="classifica-risultati">' + teams[gruppo].puntiTotali + '</td>' + 
            '<td class="classifica-risultati">' + teams[gruppo].puntiSpareggio + '</td>' +
            '<td class="classifica-risultati">' + teams[gruppo].puntiConclusi + '</td>' +  
            '<td class="classifica-col1SEP" style="border: 0px;"></td>'; 
        for (var ii in classificaTeams)         
        {
            gruppoAvversario  = classificaTeams[ii];
            stile = '';
            stileTD = '';
            risultato = '';
            partitaConclusa = false;
            if  (gruppo == gruppoAvversario)
            {
                url = '';
                stile = 'background-color:#b3b3b3;';
            } else {
                //Ricerco partita
                boards = 0;
                url = '';
                for (var partita in matchs)         
                {
                    //team da stampare sulla riga è team1
                    if (matchs[partita].team1 == gruppo && matchs[partita].team2 == gruppoAvversario)
                    {
                        url = matchs[partita].url;
                        boards = matchs[partita].boards;
                        score1 = matchs[partita].score1;
                        score2 = matchs[partita].score2;
                        partitaConclusa = matchs[partita].concluso;
                    } 
                    //team da stampare sulla riga è team2
                    if (matchs[partita].team2 == gruppo && matchs[partita].team1 == gruppoAvversario)
                    {
                        url = matchs[partita].url;
                        boards = matchs[partita].boards;
                        score1 = matchs[partita].score2;
                        score2 = matchs[partita].score1;
                        partitaConclusa = matchs[partita].concluso;
                    }
                }

                //Se la partita esiste
                if (boards > 0)
                {
                    //Se terminata
                    if (partitaConclusa)
                    {
                        //Pareggio
                        if (score1 == score2)
                        {
                            risultato = '0.5 - 0.5 <BR> (' + score1 + ' - ' + score2 + ')';
                            stileTD = 'style="background-color:#84b2ed;border: 1px solid black;"';   //PAREGGIO
                            stile = 'color:black;font-weight: bold;';
                        } 
                        //Vinto team 1
                        if (score1 > score2)
                        {
                            risultato = '1 - 0 <BR> (' + score1 + ' - ' + score2 + ')';
                            stileTD = 'style="background-color:#4bc74b;border: 1px solid black;"'; //VINTO
                            stile = 'color:black;font-weight: bold;';
                        } 
                        //Vinto team 2
                        if (score1 < score2)
                        {
                            risultato = '0 - 1 <BR> (' + score1 + ' - ' + score2 + ')';
                            stileTD = 'style="background-color:#f75959;border: 1px solid black;"';  //PERSO
                            stile = 'color:black;font-weight: bold;';
                        } 
                    } else {
                        //Match da terminare
                        risultato = score1 + ' - ' + score2 + '<BR> ('+ (score1+score2) + '/' + (boards*2) + ')';
                        //Pareggio
                        if (score1 == score2)
                            stile = 'color:blue;';
                        //Vinto team 1
                        if (score1 > score2)
                            stile = 'color:green;';
                        //Vinto team 2
                        if (score1 < score2)
                            stile = 'color:red;';
                        stileTD = 'style="border: 1px solid black;"';  //PERSO
                    }
                }
            }
                    

            //Scrivo valori calcolati nella cella
            if (url == '')   //stessa squadra
                stRiga += '<td class="classifica-risultati" style="' + stile + '"> </td>'
            else
               stRiga += '<td ' + stileTD + '> <a style="text-decoration: none;font-weight: normal;' + stile + ' " href="' + url +'" target=”_blank”>' + risultato + '</a></td>';
        }
        stRiga += '</tr>'
        $("#classifica").append(stRiga);
    }

    //Calcolo e stampo medagliere
    stampaMedagliere();
}

//calcola e stampa Medagliere
function stampaMedagliere()
{
    //Calcolo punteggi
    for (var index in albo) {
        //Calcolo punti
        teams[albo[index].primo].puntiAlbo += 10000;
        teams[albo[index].primo].albo1 ++;
        teams[albo[index].secondo].puntiAlbo += 100;
        teams[albo[index].secondo].albo2 ++;
        teams[albo[index].terzo].puntiAlbo += 1;
        teams[albo[index].terzo].albo3 ++;
    }

    //Imposto posizione e stampo
    var team = '';
    var max = 0;
    var posizione = 0;
    var nPareggi = 0;
    var oldMax = 0;
    var riga = "";
    while (max > -1)
    {
        max = -1;
        for (var i in teams)
        {
            if ((teams[i].posizioneAlbo == 0) && (teams[i].puntiAlbo > max) && (teams[i].puntiAlbo > 0)) {
                team = i;
                max = teams[i].puntiAlbo;
            }
        }
        if (max > -1) 
        {
            if (oldMax == max)
            {
                nPareggi++;
            } else {
                posizione++;
                posizione += nPareggi;
                nPareggi = 0;
                oldMax = max;
            }    
           teams[team].posizioneAlbo = posizione;

           //Stampo il giocatore
           riga = '<tr class="riga">' +   
                '<td class="classifica-col1">#'  + teams[team].posizioneAlbo + '</td> ' + 
                '<td class="classifica-col2"> <table><tbody><tr> <td> <img class="classifica-avatar" src="' + teams[team].icon + '">    </td>' +
                '<td width="7px"></td>'+
                '<td><div>            <a class="username" href="' + teams[team].url + '" target="”_blank”">' + teams[team].name + '</a>        </div>         </td>    </tr>'+
                    '</tbody></table> </td> ' +
                '<td class="classifica-colCenter">' + teams[team].albo1 + '</td> <td class="classifica-colCenter">' + teams[team].albo2 + '</td>  <td class="classifica-colCenter">' + teams[team].albo3 + '</td>'+
           '</tr>';
   
           $("#medagliere").append(riga)
    }
   
 }

    //calcola e stampa albo d'oro
    stampaAlboOro();
}

//calcola e stampa albo d'oro
function stampaAlboOro()
{
    var riga = '';
    for (var index in albo) {
        riga = '<tr class="riga">   <td class="classifica-colCenter">'  + albo[index].stagione + '</td>'+
        
        '<td class="classifica-col2"> <table><tbody><tr> <td> <img class="classifica-avatar" src="' + teams[albo[index].primo].icon + '">    </td>' +
        '<td width="7px"></td>'+
        '<td><div>            <a class="username" href="' + teams[albo[index].primo].url + '" target="”_blank”">' + teams[albo[index].primo].name + '</a>        </div>         </td>    </tr>'+
            '</tbody></table> </td> ' +
        
        '<td class="classifica-col2"> <table><tbody><tr> <td> <img class="classifica-avatar" src="' + teams[albo[index].secondo].icon + '">    </td>' +
        '<td width="7px"></td>'+
        '<td><div>            <a class="username" href="' + teams[albo[index].secondo].url + '" target="”_blank”">' + teams[albo[index].secondo].name + '</a>        </div>         </td>    </tr>'+
        '</tbody></table> </td> ' +
                
        '<td class="classifica-col2"> <table><tbody><tr> <td> <img class="classifica-avatar" src="' + teams[albo[index].terzo].icon + '">    </td>' +
        '<td width="7px"></td>'+
        '<td><div>            <a class="username" href="' + teams[albo[index].terzo ].url + '" target="”_blank”">' + teams[albo[index].terzo].name + '</a>        </div>         </td>    </tr>'+
        '</tbody></table> </td> ' +

        '</tr>';
        //Stampo
        $("#alboOro").append(riga)
    }


    //Ricerco elo e stampo classifica giocatori
    getAvatar();
}

    