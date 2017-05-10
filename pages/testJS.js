     google.charts.load('current', {'packages': ['geochart']});
     google.charts.setOnLoadCallback(drawMarkersMap);

      function drawMarkersMap() {
      var data = google.visualization.arrayToDataTable([
['City'],
['Arques'],
['Marrakech'],
['Dalian'],
['GUYANCOURT'],
['Fumay'],
['Villejust'],
['Amiens'],
['Lachine (Montreal)'],
['Amiens'],
['JEUMONT'],
['Douai'],
['PARIS'],
['Saint Jean de la Ruelle'],
['Plan-les-Ouates'],
['Ahmedabad'],
['AMIENS'],
['Pacy-Sur-Eure'],
['philadelphia'],
['Cedes'],
['Lallaing'],
['Newport, Isle of Wight'],
['ChÃ¢tellerault'],
['Paris'],
['Vernouillet'],
['Gien'],
['Longueil Sainte Marie'],
['paris'],
['Amiens'],
['Amiens'],
['Paris La DÃ©fense Cedex'],
['MalmÃ¶'],
['Amiens'],
['Amiens'],
['La Courneuve'],
['PARIS'],
['Casablanca'],
['CourtabÅ“uf Cedex'],
['SECLIN'],
['Meaulte'],
['Bouskoura'],
['ANICHE'],
['AMIENS'],
['FerriÃ¨res-en-Bray'],
['Amiens'],
['Saint- Denis'],
['Onnaing'],
['Amiens'],
['Bezannes'],
['Southampton'],
['Beijing'],
['IJmuden'],
['ASNIERES'],
['Douai'],
['AMIENS'],
['Paris'],
['Strasbourg'],
['Gondecourt'],
['Roissy CDG cedex'],
['chevilly larue'],
['Villeneuve d ascq'],
['Mohammedia'],
['Haccourt'],
['Viry-Chatillon'],
['Steenvoorde'],
['Saint-cloud'],
['Clermont-Ferrand'],
['NEW DELHI'],
['Salvador'],
['Stara Tura'],
['douai'],
['PARIS'],
['Thetford'],
['henin beaumont'],
['La dÃ©fense'],
['Nouaceur'],
['Poitiers'],
['leicester'],
['Crespin'],
['Eisenach'],
['St Ouen CEDEX'],
['Lyon'],
['Bobigny'],
['Malakoff'],
['LILLE'],
['Izegem'],
['MÃ¼nchen'],
['Casablanca'],
['LILLE'],
['Batam'],
['Roanne'],
['Hamburg'],
['Dudelange'],
['Duppigheim'],
['Borj CÃƒÂ©dria, TUNIS'],
['CASABLANCA'],
['Le Vallois Perret'],
['Blois'],
['SalÃ©'],
['Paris'],
['Barcelone'],
['DOUAI'],
['Steenvoorde'],
['COURBEVOIE'],
['Toulouse'],
['ANNONAY'],
['CASABLANCA'],
['el jadida'],
["VILLENEUVE D'ASCQ"],
['HENIN BEAUMONT'],
['Sainte-Julie'],
['salaise sur sannes'],
['Hong Kong - Shenzhen'],
['Burjassot'],
['Le Mans'],
['Seclin'],
[''],
['Guyancourt Cedex'],
['MAUBEUGE'],
['Izegem'],
['BrÃªme'],
['Petite ForÃªt'],
['Newcastle Uppon Tyne'],
['Poissy'],
['Lomme'],
['Douai'],
['La Defense'],
[''],
['ChÃ¢tellerault'],
['Lyon'],
[''],
['Maubeuge'],
['MontrÃ©al'],
['Maubeuge'],
['Maubeuge'],
['Amiens'],
['La Gacilly'],
['Montreal']
      ]);

      var options = {
        //region: 'FR',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']},
		enableRegionInteractivity: true,
      };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    };