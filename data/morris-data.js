
	 $(document).ready(function() {		 
		 // var url = 'http://tim/stages/PresentationStage/recherche-proxy.asp?_dc=1491211964711&command=getListeStat&format=JSON&typestage=0&ch_globale=&ch_domaine=&datedebut=&start=20&limit=30';
		 // command: "getListeStat" dédié au PDR
		 //
		 // format: "JSON", possible XML
		 //
		 // Pagination :
		 // start: integer premier enregistrement à observer (0 par défaut)
		 // limit: integer nombre d'enregistrements à retourner
		 //
		 // typestage: integer, critère de recherche (0 par défaut pour tous les types), voir référentiel
		 // ch_globale: chaîne de filtre (vide en l'absence de critère). La recherche stricte porte sur le nom de l'entreprise, la description du stage, les activités de l'entreprise. (, les nom et prénom de l'étudiant, fonctionnalité à retirer)
		 // ch_domaine: recherche sur les domaines d'activité de l'entreprise
		 // datedebut: ne retourne que les résultats des stages ayant débuté après cette date
		 
		 var url = '/PDR/data/stagesPR.json';
		 
		 $.ajax({

		   // The 'type' property sets the HTTP method.
		   // A value of 'PUT' or 'DELETE' will trigger a preflight request.
		   type: 'GET',

		   // The URL to make the request to.
		   url: url,

		   // The 'contentType' property sets the 'Content-Type' header.
		   // The JQuery default for this property is
		   // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
		   // a preflight. If you set this value to anything other than
		   // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
		   // you will trigger a preflight request.
		   contentType: 'application/json',

		   xhrFields: {
		     // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
		     // This can be used to set the 'withCredentials' property.
		     // Set the value to 'true' if you'd like to pass cookies to the server.
		     // If this is enabled, your server must respond with the header
		     // 'Access-Control-Allow-Credentials: true'.
		     withCredentials: false
		   },

		   headers: {
		     // Set any custom headers here.
		     // If you set any non-simple headers, your server must include these
		     // headers in the 'Access-Control-Allow-Headers' response header.
		   },

		   success: function(stagesDataArray) {
			   calculVal(stagesDataArray);
		     // Here's where you handle a successful response.
				/*console.log(stagesDataArray);
				displayTableHeadInto($('#stagesTable thead'),Object.keys(stagesDataArray.Presentations[0]));
				
	  			$.each(stagesDataArray.Presentations, function(k,s) {
		 			appendStageDataInto($('#stagesTable tbody'),s);
	  			});
				$('#stagesDiv').css('display','block');
				$('#imgSpin').css('display','none');*/
		   },

		   error: function() {
		     // Here's where you handle an error response.
		     // Note that if the error was due to a CORS issue,
		     // this function will still fire, but there won't be any additional
		     // information about the error.
			 
				
		   }
		 });
 
		  // var stagesDataArray = stagesData();
		  //
		  //
		  // displayTableHeadInto($('#stagesDataDiv table thead'), stagesDataArray[0]);
		  //
		  //  		  var $tableElement = $('#stagesDataDiv table tbody');
		  //
		  //  		  $.each(stagesDataArray, function(index,stage){
		  //  				var htmlText = '<tr>';
		  //  				htmlText += '<td>'+ index +'</td>';
		  //  				$.each(stage, function( index, value ) {
		  //  					htmlText += '<td>'+ value +'</td>';
		  //  				});
		  //  				htmlText += '</tr>';
		  //  				$tableElement.append(htmlText);
		  //  		  });
  		  
	 });


$(function() {
	
	var tabRes = calculVal();
/*
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });*/
	
	if(window.location.href.indexOf("isic") > -1) {

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "TPE",
            value: 12
        }, {
            label: "Petite Entreprise",
            value: 30
        }, {
            label: "Moyenne Entreprise",
            value: 20
        }, {
			label: "Entreprise Taille intermédiaire",
			value: 43
		}, {
			label: "Grande Entreprise",
			value: 26
		}],
        resize: true
    });
	
	   Morris.Donut({
        element: 'morris-donut-chart-2',
        data: [{
            label: "Dvlp logiciel",
            value: 50
        }, {
            label: "Réseaux",
            value: 46
        }, {
            label: "Application mobile",
            value: 12
        }],
        resize: true
    });
	   Morris.Donut({
        element: 'morris-donut-chart-3',
        data: [{
            label: "Automobile",
            value: 12
        }, {
            label: "Conseil/Finance",
            value: 59
        }, {
            label: "BTP",
            value: 57
        }, {
            label: "Energie",
            value: 38
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '0<500',
            a: 100,
            b: 90
        }, {
            y: '500<1000',
            a: 75,
            b: 65
        }, {
            y: '1000<1500',
            a: 50,
            b: 40
        }, {
            y: '>1500',
            a: 75,
            b: 65
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
	
	}
	
	
	//*************************OAPI**************************
	
	
	if(window.location.href.indexOf("oapi") > -1) {
		
	    Morris.Donut({
        element: 'morris-donut-chart-oapi',
        data: [{
            label: "TPE",
            value: tabRes[1][0]
        }, {
            label: "Petite Entreprise",
            value: tabRes[1][1]
        }, {
            label: "Moyenne Entreprise",
            value: tabRes[1][2]
        }, {
			label: "Entreprise Taille intermédiaire",
			value: tabRes[1][3]
		}, {
			label: "Grande Entreprise",
			value: tabRes[1][4]
		}, {
			label: "Administration/Public",
			value: tabRes[1][5]
		}],
        resize: true,
		colors: ['#ec6e11', '#5c2b06', '#743708', '#8c4209', '#a44d0b', '#bc580d', '#d4630f'],
    });
	
	   Morris.Donut({
        element: 'morris-donut-chart-2-oapi',
        data: [{
            label: "Productique",
            value: 50
        }, {
            label: "Automatisme",
            value: 46
        }, {
            label: "Lean Management",
            value: 12
        }],
        resize: true,
		colors: ['#ec6e11', '#5c2b06', '#743708', '#8c4209', '#a44d0b', '#bc580d', '#d4630f'],
    });
	
		Morris.Donut({
			colors: ['#ec6e11', '#5c2b06', '#743708', '#8c4209', '#a44d0b', '#bc580d', '#d4630f'],
			element: 'morris-donut-chart-3-oapi',
			data: [{
				label: "Industries",
				value: tabRes[2][0]
			}, {
				label: "Metallurgie",
				value: tabRes[2][1]
			}, {
				label: "Energie",
				value: tabRes[2][2]
			}, {
				label: "Auto/Naval",
				value: tabRes[2][3]
			}, {
				label: "BTP",
				value: tabRes[2][4]
			}
			, {
				label: "Conseil/Finance",
				value: tabRes[2][5]
			}],
        resize: true
    });
	
	   Morris.Bar({
        element: 'morris-bar-chart-oapi',
        data: [{
            y: 'NR',
            a: tabRes[0][0],
            //b: 90
        }, {
            y: 'NC',
            a: tabRes[0][1],
            //b: 65
        }, {
            y: '<500 €',
            a: tabRes[0][2],
            //b: 40
        }, {
            y: '<1000 €',
            a: tabRes[0][3],
            //b: 65
        }, {
            y: '1000+ €',
            a: tabRes[0][4],
            //b: 65
        }],
        xkey: 'y',
        ykeys: ['a'/*, 'b'*/],
        labels: ['Nombre de stage', 'Series B'],
        hideHover: 'auto',
        resize: true,
		barColors:['#d4630f', 'a28c79']
    });
	}
});

function calculVal(dataArray){
// tabRes[0] = remuneration, tabRes[1] = statut, tabRes[2] = act
	var tabRes = [];
	var tabRem = [0,0,0,0,0,];
	var tabStatut = [0,0,0,0,0,0];
	var tabAct = [0,0,0,0,0,0];
	var presentation = dataArray;	
	for (i in presentation.Presentations) {
		
		//********** REMUNERATION *******************
		
			if (presentation.Presentations[i].remuneration == "NR") {
				tabRem[0] +=1;
			}
			if (presentation.Presentations[i].remuneration == "NC") {
				tabRem[1] +=1;
			}
			if (presentation.Presentations[i].remuneration == "<500") {
				tabRem[2] +=1;
			}
			if (presentation.Presentations[i].remuneration == "<1000") {
				tabRem[3] +=1;
			}
			if (presentation.Presentations[i].remuneration == "1000+") {
				tabRem[4] +=1;
			}
			
			
			//*************** ACTIVITE *********************
			
			if (presentation.Presentations[i].CA1_code == '50' || presentation.Presentations[i].CA1_code == '52' || presentation.Presentations[i].CA1_code == '53' || presentation.Presentations[i].CA1_code == '54' || presentation.Presentations[i].CA1_code == '56' || presentation.Presentations[i].CA1_code == '26' ){
				tabAct[0] +=1;
			}
			if (presentation.Presentations[i].CA1_code == '10' || presentation.Presentations[i].CA1_code == '9' || presentation.Presentations[i].CA1_code == '12'){
				tabAct[1] +=1;
			}		
			if (presentation.Presentations[i].CA1_code == '4'){
				tabAct[2] +=1;
			}		
			if (presentation.Presentations[i].CA1_code == '31' || presentation.Presentations[i].CA1_code == '32'){
				tabAct[3] +=1;
			}		
			if (presentation.Presentations[i].CA1_code == '55'){
				tabAct[4] +=1;
			}
			if (presentation.Presentations[i].CA1_code == '76' || presentation.Presentations[i].CA1_code == '77' || presentation.Presentations[i].CA1_code == '88' || presentation.Presentations[i].CA1_code == '90'){
				tabAct[5] +=1;
			}
			
			
			
			//********************STATUT ************************
			
			if (presentation.Presentations[i].statut == '6'){
				tabStatut[0] += 1;
			}
			if (presentation.Presentations[i].statut == '7'){
				tabStatut[1] += 1;
			}
			if (presentation.Presentations[i].statut == '1'){
				tabStatut[2] += 1;
			}
			if (presentation.Presentations[i].statut == '8'){
				tabStatut[3] += 1;
			}
			if (presentation.Presentations[i].statut == '2'){
				tabStatut[4] += 1;
			}
			if (presentation.Presentations[i].statut == '3' || presentation.Presentations[i].statut == '4'){
				tabStatut[5] += 1;
			}
	}
	tabRes[0] = tabRem;
	tabRes[1] = tabStatut;
	tabRes[2] = tabAct;
	return tabRes;
}; 