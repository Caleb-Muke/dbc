# Site Web DBC - Dimanche pour le Bien - Être des Congolais

Bienvenue sur le site officiel du parti politique DBC. Ce site Web est conçu pour présenter le parti, ses structures, événements et permettre l'adhésion en ligne.

## 📋 Contenu du Site

### 1. **Accueil** 
- Page d'accueil avec le logo et la devise du parti
- Présentation générale du DBC
- Appel à l'action pour adhérer au parti

### 2. **Structure**
- Vue d'ensemble des différentes structures du parti:
  - Direction Nationale
  - Assemblée Générale
  - Comités Régionaux
  - Secrétariat
  - Commissions Thématiques
  - Mouvements Jeunesse

### 3. **Événements**
- Liste des événements à venir
- Dates et lieux des rencontres et meetings
- Possibilité d'en savoir plus sur chaque événement

### 4. **Contact & Adhésion**
- Informations de contact du parti
- **Formulaire d'adhésion en ligne** avec les champs suivants:
  - Nom complet (obligatoire)
  - Email (obligatoire)
  - Téléphone (obligatoire)
  - Profession
  - Province (obligatoire)
  - Message ou commentaires
  - Acceptation des conditions d'adhésion
- Liens vers les réseaux sociaux

## 🎨 Couleurs du Parti

- **Bleu Principal**: #003DA5
- **Jaune**: #FFD700
- **Vert**: #228B22

## 📱 Design Responsive

Le site est entièrement responsive et fonctionne parfaitement sur:
- Desktop (1200px et plus)
- Tablettes (768px à 1199px)
- Téléphones mobiles (moins de 768px)

## 🚀 Comment Ouvrir le Site

### Option 1: Ouvrir directement dans le navigateur
1. Accédez au dossier du site: `c:\Users\User\Desktop\ANNUAIRE DBC`
2. Double-cliquez sur le fichier `index.html`
3. Le site s'ouvrira dans votre navigateur par défaut

### Option 2: Ouvrir avec un serveur local (recommandé)
Pour une meilleure expérience, utilisez un serveur local:

**Avec Python 3:**
```bash
cd c:\Users\User\Desktop\ANNUAIRE DBC
python -m http.server 8000
```
Puis allez à: `http://localhost:8000`

**Avec Node.js (http-server):**
```bash
npm install -g http-server
cd c:\Users\User\Desktop\ANNUAIRE DBC
http-server
```

## 📊 Gestion des Adhésions

### Enregistrement des Données
Les adhésions sont sauvegardées automatiquement dans le **localStorage** du navigateur. Cela signifie que les données sont stockées localement sur votre ordinateur.

### Accès aux Données d'Adhésion
Ouvrez la console du navigateur (F12 ou Ctrl+Shift+I) et utilisez ces commandes:

```javascript
// Voir les statistiques d'adhésions
updateStats()

// Exporter les adhésions en format CSV
exportAdherents()
```

### Export des Données
Pour exporter les adhésions en CSV:
1. Ouvrez la console (F12)
2. Tapez: `exportAdherents()`
3. Copiez le CSV affiché
4. Collez dans Excel ou un fichier texte

## 📁 Structure des Fichiers

```
ANNUAIRE DBC/
├── index.html           # Page HTML principale
├── styles.css          # Feuille de style (couleurs, design)
├── script.js           # Interactions et formulaire
├── logo DBC.jpg        # Logo du parti
├── DBC DÉPLIANT.pdf    # Documentation du parti
└── README.md           # Ce fichier
```

## ✨ Fonctionnalités

- ✅ Navigation fluide et intuitive
- ✅ Menu hamburger responsive
- ✅ Formulaire d'adhésion avec validation
- ✅ Stockage des adhésions en localStorage
- ✅ Animations au chargement et au scroll
- ✅ Design moderne avec les couleurs du parti
- ✅ Optimisé pour mobile et desktop
- ✅ Bouton retour vers le haut
- ✅ Lien vers les réseaux sociaux

## 🔧 Personnalisation

### Modifier les Informations de Contact
Ouvrez `index.html` et cherchez la section "Nous Contacter" pour modifier:
- Adresse
- Numéro de téléphone
- Email

### Ajouter des Événements
Dans `index.html`, trouvez la section "Événements" et ajoutez de nouvelles cartes d'événements en copiant le format existant.

### Ajouter des Provinces
Dans le formulaire d'adhésion, vous pouvez ajouter d'autres provinces en editant le `<select id="province">`.

## 📋 Checklist de Configuration

- [ ] Vérifier que le logo `logo DBC.jpg` est dans le dossier
- [ ] Vérifier que tous les fichiers HTML, CSS et JS sont présents
- [ ] Ouvrir le site dans un navigateur
- [ ] Tester le formulaire d'adhésion
- [ ] Tester la navigation sur mobile
- [ ] Personaliser les informations de contact

## 📞 Support

Pour toute question ou assistance:
- Email: contact@dbc-parti.org
- Téléphone: +243 123 456 789

---

**Version**: 1.0  
**Dernière mise à jour**: Mai 2026  
**Développé pour le DBC** 🌳🇨🇩
