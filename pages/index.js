export default {
    dateFormatter: (date) =>
        date
            ? `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1)
                  .toString()
                  .padStart(2, '0')}.${date.getFullYear()}`
            : ' - ',
    'dateFormatter.shortDate': (date) =>
        date
            ? `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1)
                  .toString()
                  .padStart(2, '0')}.${date.getFullYear()}`
            : ' - ',
    monthFormatter: (date) =>
        date ? date.toLocaleString('de-CH', { year: 'numeric', month: 'long' }) : ' - ', // November 2021
    weekFormatter: (date) => (date ? `W${getWeek(date)} ${date.getFullYear()}` : ' - '), // W28 2021
    priceFormatter: (price, currency) =>
        currency && price
            ? price.toLocaleString('de-CH', { style: 'currency', currency })
            : price
            ? price.toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            : 0,
    numberFormatter: (number) =>
        number
            ? number.toLocaleString('de-CH', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
            : 0,
    twoDigitFormatter: (number) =>
        number
            ? number.toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            : 0,
    loadingDictionaries: 'Metadaten werden geladen.',
    loadingDictionariesFailed: 'Laden der Metadaten ist fehlgeschlagen.',
    loadingPermissions: 'Berechtigungen werden geladen.',
    loadingPermissionsFailed: 'Laden der Berechtigungen ist fehlgeschlagen.',
    login: 'Anmelden',
    loginFailed: 'Einloggen ist fehlgeschlagen.',
    logout: 'Abmelden',
    email: 'E-Mail',
    username: 'Benutzername',
    name: 'Name',
    password: 'Passwort',
    currentPassword: 'Aktuelles Passwort',
    newPassword: 'Neues Passwort',
    repeatNewPassword: 'Neues Passwort wiederholen',
    forgotPassword: 'Passwort vergessen?',
    changePassword: 'Passwort ändern',
    resetPassword: 'Passwort zurücksetzen',
    incorrectPassword: 'Passwort ist nicht korrekt.',
    passwordValidationRules: (minLength) =>
        `Passwort muss mindestens ${minLength} Zeichen lang sein und aus Gross-, Kleinbuchstaben, Zahlen und einem Sonderzeichen bestehen.`,
    passwordLengthError: (minLength, maxLength) =>
        `Passwort muss mindestens ${minLength} Zeichen lang sein.`,
    repeatedPasswordMismatchError: 'Neues Passwort stimmt nicht überein.',
    passwordSpecialCharacterError: 'Passwort muss mindestens ein Sonderzeichen enthalten.',
    passwordUpperCaseLetterError: 'Passwort muss mindestens einen Grossbuchstaben enthalten',
    passwordLowerCaseLetterError: 'Passwort muss mindestens einen Kleinbuchstaben enthalten.',
    passwordDigitError: 'Passwort muss mindestens eine Zahl enthalten.',
    currentPasswordIsRequiredError:
        'Um ein neues Passwort zu setzen, geben Sie bitte das Aktuelle auch ein.',
    newPasswordIsRequiredError: 'Neues Password ist ein Pflichtfeld.',
    passwordConfirmationIsRequiredError: 'Bitte geben Sie das neue Passwort nochmal ein.',
    applyNewPassword: 'Neues Password übernehmen',
    passwordChangeFailed: (logNumber) =>
        `Password konnte nicht aktualisiert werden. Technische Details finden Sie im Log #${logNumber}.`,
    passwordChangeRequestFailed: `Beim Speichern des neuen Passworts auf dem Server ist ein Fehler aufgetreten.`,
    passwordChangeSuccess: `Password wurde aktualisiert.`,
    register: 'Registrieren',
    'authentication.description':
        'Haben Sie bereits ein Login? Dann geben Sie Ihre Anmeldedaten ein oder registrieren Sie sich.',
    'authentication.initializationError':
        'Bei der Initialisierung des Authentifizierungsprozesses ist ein Fehler aufgetreten.',
    insufficientPermissions: 'Unzureichende Berechtigungen',
    home: 'Home',
    dateRange: 'Laufzeit',
    organizationStructure: 'Organisationsstruktur',
    'cockpit.myJobs': 'Meine Stellen',
    proAnalytics: 'ProAnalytics',
    'proAnalytics.title': 'ProAnalytics',
    'proAnalytics.dashboard': 'ProAnalytics Dashboard',
    'proAnalytics.selectOrganisationNodeRequest':
        'Bitte setzen Sie zuerst den Filter Organisationsstruktur ein.',
    'proAnalytics.jobCountStatistics': 'Anzahl Stellen',
    'proAnalytics.jobCountStatistics.average': (value) =>
        `${Number(value).toLocaleString('de-CH', {
            maximumFractionDigits: 2,
        })} Offene Stellen im Durchschnitt/Tag`,
    'proAnalytics.performanceStatistics': 'Performance',
    'proAnalytics.performanceStatisticsActionType': 'AktionsTyp',
    'proAnalytics.viewBy.fieldOfActivity': 'Berufsgruppe',
    'proAnalytics.careerCenterStatisticsActionType': 'AktionsTyp',
    'proAnalytics.careerCenterStatistics': 'Ihr Stellenmarkt',
    'proAnalytics.careerCenterStatisticsUtm': 'Stellenaufrufe nach UTM',
    'proAnalytics.careerCenterStatisticsSearch': 'Suchbegriffe',
    'proAnalytics.careerCenterStatisticsSelection': 'Filter',
    'proAnalytics.careerCenterStatisticsJobabos': 'Jobabos',
    'proAnalytics.careerCenterStatisticsPrevPeriod': '% Vorperiode',
    'proAnalytics.careerCenterStatisticsSearchWeb': 'Suchanfragen Internet',
    'proAnalytics.careerCenterStatisticsSearchIntranet': 'Suchanfragen Intranet',
    'proAnalytics.careerCenterStatisticsRank': 'Rang',
    'proAnalytics.careerCenterStatisticsFilter': 'Filter',
    'proAnalytics.careerCenterStatisticsElement': 'Element',
    'proAnalytics.careerCenterStatisticsViews': 'Anfragen',
    'proAnalytics.careerCenterStatisticsIntranet': 'Intranet',
    'proAnalytics.careerCenterStatisticsInternet': 'Internet',
    'proAnalytics.careerCenterStatisticsStelle': 'Stelle',
    'proAnalytics.careerCenterStatisticsTotal': 'Total',
    'proAnalytics.careerCenterStatisticsFacebook': 'Facebook',
    'proAnalytics.careerCenterStatisticsGoogle': 'Google',
    'proAnalytics.careerCenterStatisticsLinkedIn': 'LinkedIn',
    'proAnalytics.careerCenterStatisticsDirectLink': 'Direktlink',
    'proAnalytics.careerCenterStatisticsNoUTM': 'kein UTM',
    'proAnalytics.careerCenterStatisticsOther': 'weitere',
    'proAnalytics.performanceStatisticsActionType.clicks': 'Klicks',
    'proAnalytics.performanceStatisticsActionType.views': 'Views',
    'proAnalytics.performanceStatisticsActionType.applications': 'Bewerbungen',
    'proAnalytics.careerCenterStatisticsActionType.utm': 'UTM',
    'proAnalytics.careerCenterStatisticsActionType.search': 'SUCHE',
    'proAnalytics.careerCenterStatisticsActionType.selection': 'AUSWAHL',
    'proAnalytics.viewBy.jobs': 'Stellen',
    'proAnalytics.candidateJourneyStatistics': 'Candidate Journey',
    'proAnalytics.costsStatistics': 'Kosten',
    'proAnalytics.costsProApplication': 'Kosten pro Bewerbung',
    'proAnalytics.costsProMedium': 'Kosten pro Medium',
    'proAnalytics.costsPerMediumStatistics': 'Kosten pro Medium Statistik',
    'proAnalytics.costsProView': 'Kosten pro View',
    'proAnalytics.costsProClick': 'Kosten pro Klick',
    'proAnalytics.publicationsPerMedium': 'Publikationen pro Medium',
    'proAnalytics.viewsPerOnlineDay': 'Views/OT',
    'proAnalytics.clicksPerOnlineDay': 'Bewerberklicks/OT',
    'proAnalytics.applicationsPerOnlineDay': 'Bewerbungen/OT',
    'proAnalytics.applications': 'Bewerbungen',
    'proAnalytics.clicks': 'Bewerberklicks',
    'proAnalytics.deviceRatio': '% web|mob',
    'proAnalytics.activeJobAds': 'Aktive Stellen',
    'proAnalytics.pits': 'Pits',
    'proAnalytics.web': 'Web',
    'proAnalytics.mobile': 'Mobile',
    'proAnalytics.search': 'Suche',
    'proAnalytics.search.placeholder':
        'Stellentitel, Recruiter, Auftrags-, Publikations- oder Stellennummer',
    'proAnalytics.search.recruiterKeyword': 'Recruiter',
    'proAnalytics.search.termEverywhere': ({ searchTerm, hitCount }) =>
        `Ergebnisse für '${searchTerm}' ${hitCount === undefined ? '' : `(${hitCount})`}`,
    'proAnalytics.search.termInColumn': ({ searchTerm, fieldName, hitCount }) =>
        `Ergebnisse für '${searchTerm}' in ${fieldName} (${hitCount})`,
    'proAnalytics.search.resultInfo': ({ searchTerm, fieldName, hitCount }) =>
        `${hitCount} ${
            hitCount === 1 ? 'Ergebnis' : 'Ergebnisse'
        } für ${searchTerm} in ${fieldName}`,
    'proAnalytics.search.jobTitle': (jobTitle) => `Job-Titel: '${jobTitle}'`,
    'proAnalytics.search.externalJobTitle': (jobTitle) => `Externer Job-Titel: '${jobTitle}'`,
    'proAnalytics.search.postingId': (id) => `Stellennummer: '${id}'`,
    'proAnalytics.search.publicationId': (id) => `Publikationsnummer: '${id}'`,
    'proAnalytics.search.orderId': (id) => `Auftragsnummer: '${id}'`,
    'proAnalytics.dateRange.autoCorrectionWarning': ({ start, end }) =>
        `Es stehen Daten der letzten zwei Jahre zur Verfügung. Ihr Filter wurde dementsprechend angepasst.`,
    'proAnalytics.dictionaries.error': ({ logNumber }) =>
        'Filter Dictionaries konnte nicht aktualisiert werden. Technische Details finden Sie im Log #${logNumber}.',
    'proAnalytics.search.error': ({ logNumber }) =>
        `Die Suche ist fehlgeschlagen. Technische Details finden Sie im Log #${logNumber}.`,
    'proAnalytics.jobCount.error': ({ logNumber }) =>
        `Anzahl Stellen konnte nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`,
    'proAnalytics.performance.error': ({ logNumber }) =>
        `Daten von Performance konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`,
    'proAnalytics.candidateJourney.error': ({ logNumber }) =>
        `Daten von Candidate Journey konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`,
    'proAnalytics.costs.error': ({ logNumber }) =>
        `Kostendaten konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`,
    'proAnalytics.kpi.error': ({ logNumber }) =>
        `KPI-Daten konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`,
    'proAnalytics.careerCenter.error': ({ logNumber }) =>
        `Stellenmarktstatistiken konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`,
    'proAnalytics.moreFilters': 'Mehr Filter',
    'proAnalytics.lessFilters': 'Weniger Filter',
    'proAnalytics.resetFilters': 'Alle zurücksetzen',
    'proAnalytics.maxDatasetsNumberInfo': (maxDatasetsNumber) =>
        `Sie können maximal ${maxDatasetsNumber} Datasets anzeigen.`,
    'proAnalytics.view.byJobAd': 'nach Stelle',
    'proAnalytics.view.byMedium': 'nach Medium',
    'proAnalytics.view.byFieldOfActivity': 'nach Berufsgruppe',
    'proAnalytics.candidateJourney.trackingViewsWarning':
        'Für manche Medien können keine Aufrufe gemessen werden.',
    'proAnalytics.candidateJourney.trackingClicksWarning':
        'Für manche Medien können keine Klicks gemessen werden.',
    'proAnalytics.candidateJourney.trackingApplicationsWarning':
        'Für manche Medien können keine Bewerbungen gemessen werden.',
    'proAnalytics.candidateJourney.trackingViewsInfo':
        'Die ausgewiesene Statistik weist die korrekten Zahlen auf.',
    'proAnalytics.candidateJourney.trackingClicksInfo':
        'Die ausgewiesene Statistik weist die korrekten Zahlen auf.',
    'proAnalytics.candidateJourney.trackingApplicationsInfo':
        'Die ausgewiesene Statistik weist die korrekten Zahlen auf.',
    'proAnalytics.mediaTrackingInfo': 'Medium-Tracking-Infos',
    'proAnalytics.loadingDictionaries': 'Dictionaries werden geladen',
    'proAnalytics.loadingCustomerConfig': 'Kundenkonfiguration wird geladen.',
    'proAnalytics.insufficientPermissions':
        'Sie haben keine Berechtigungen um auf das ProAnalytics Modul zuzugreifen.',
    'proAnalytics.reports.insufficientPermissions':
        'Sie haben keine Berechtigungen um auf das Reports Modul zuzugreifen.',
    'proAnalytics.rangePickerFormat': 'DD.MM.YYYY',
    'posting.create': 'Neues Inserat erstellen',
    'settings.displayOnProfile': 'Anzeige in meinem Profil',
    'settings.mediaLists': 'Medienlisten',
    'settings.preferences': 'Einstellungen',
    order: 'Auftrag',
    orderId: 'Auftrags-ID',
    posting: 'Inserat',
    postingId: 'Inserats-ID',
    publication: 'Publikation',
    publications: 'Publikationen',
    publicationId: 'Publikation ID',
    cockpit: 'Cockpit',
    jobs: 'Stellen',
    company: 'Firma',
    companyName: 'Firmenname',
    country: 'Land',
    'country.usa': 'USA',
    'country.greatBritain': 'Grossbritannien',
    'country.unitedKingdom': 'Grossbritannien',
    'country.germany': 'Deutschland',
    'country.austria': 'Österreich',
    'country.france': 'Frankreich',
    'country.italy': 'Italien',
    'country.switzerland': 'Schweiz',
    language: 'Sprache',
    'language.english': 'Englisch',
    'language.german': 'Deutsch',
    'language.french': 'Französisch',
    'language.italian': 'Italienisch',
    'language.swissGerman': 'Schweizerdeutsch',
    settings: 'Einstellungen',
    'settings.manageMediaList': 'Medienliste verwalten',
    'settings.yourAccessData': 'Ihre Zugangsdaten für den JobBooster',
    'settings.password.title': 'Login & Passwort',
    help: 'Hilfe',
    cancel: 'Abbrechen',
    timePeriod: 'Zeitraum',
    dateFrom: 'Von',
    dateTo: 'Bis',
    yesterday: 'Gestern',
    currentMonth: 'Laufender Monat',
    lastMonth: 'Letzter Monat',
    currentYear: 'Laufendes Jahr',
    lastYear: 'Letztes Jahr',
    recruiter: 'Recruiter',
    recruiterId: 'Recruiter-ID',
    recruiterName: 'Recruiter-Name',
    recruiters: 'Recruiter',
    allRecruiters: 'Alle Recruiter',
    medium: 'Medium',
    mediumId: 'Medium-ID',
    media: 'Medien',
    'media.online': 'Online',
    'media.print': 'Print',
    'media.ppp': 'PPP',
    'media.ppd': 'PPD',
    'media.private': 'Privat',
    mediaType: 'Medientyp',
    allMedia: 'Alle Medien',
    fieldOfActivity: 'Berufsgruppe',
    allFieldsOfActivity: 'Alle Berufsgruppen',
    industry: 'Branche',
    allIndustries: 'Alle Branchen',
    atsId: 'Interne ID oder ATS-ID',
    apply: 'Übernehmen',
    'validator.username.required': 'Bitte geben Sie Ihren Benutzernamen an.',
    'validator.password.required': 'Bitte geben Sie Ihr Passwort an.',
    'validator.email.required': 'Bitte geben Sie die E-Mail-Adresse an.',
    'validator.email.format': 'Eingegebene E-Mail-Adresse ist nicht korrekt.',
    all: 'Alle',
    total: 'Total',
    cost: 'Kosten',
    date: 'Datum',
    other: (count) => (count !== undefined ? `Andere (${count})` : 'Andere'),
    showMore: 'Mehr',
    showLess: 'Weniger',
    search: 'Suchen',
    state: 'Zustand',
    overview: 'Übersicht',
    noData: 'Keine Daten',
    applications: 'Bewerbungen',
    clicks: 'Bewerberklicks',
    views: 'Views',
    jobAd: 'Stelle',
    jobId: 'Stelle ID',
    'jobAd.internalTitle': 'Titel (intern)',
    'jobAd.externalTitle': 'Titel (extern)',
    'jobAd.title': 'Titel',
    'kpiStatistics.stellen': 'Stellen',
    'kpiStatistics.publications': 'Publikationen',
    'kpiStatistics.costs': 'Kosten',
    checkLog: (logNumber) => `Technische Details finden Sie im Log #${logNumber}.`,
    error: 'Fehler',
    unexpectedError: ({ logNumber }) =>
        `Etwas ist schiefgelaufen. Technische Details finden Sie im Log #${logNumber}.`,
    refreshRequest: 'Bitte laden Sie die Applikation neu oder versuchen Sie es später nochmals.',
    recentlyUsed: 'Zuletzt benutzt',
    information: 'Information',
    webMobile: 'Verteilung Web-Mobile',
    back: 'Zurück',
}
