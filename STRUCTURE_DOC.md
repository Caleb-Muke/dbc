# Documentation - Page Structure

## 📄 Vue d'ensemble

La page `structure.html` est une page dédiée affichant la structure complète du parti politique DBC avec les détails de tous les membres clés.

## 🎯 Fonctionnalités

### 1. **En-tête avec Statistiques**
- Affiche le nombre total de provinces (23)
- Affiche le nombre de membres clés (15+)
- Affiche le nombre d'organes majeurs (6)

### 2. **Direction Nationale**
- Affiche 6 membres de la direction
- Chaque membre a:
  - Image/Avatar
  - Nom complet
  - Fonction/Poste
  - Description
  - Liens de contact (téléphone, email)

### 3. **Organes du Parti**
Chaque organe a sa propre section:
- **Assemblée Générale** - Organe suprême
- **Comités Régionaux** - Représentation dans les 23 provinces
- **Secrétariat** - Administration et communication
- **Commissions Thématiques** - Éducation, Santé, Économie, Environnement
- **Mouvements Jeunesse** - Mobilisation de la jeunesse

### 4. **Hiérarchie Organisationnelle**
Affiche les 4 niveaux de la structure:
- Niveau 1: Direction Suprême
- Niveau 2: Direction Exécutive
- Niveau 3: Directions Fonctionnelles
- Niveau 4: Organes Spécialisés

## 🎨 Design des Cartes de Membres

Chaque carte de membre affiche:
```
┌─────────────────────┐
│   IMAGE/AVATAR      │
│   (280px x 280px)   │
├─────────────────────┤
│  NOM (titre)        │
│  FONCTION (badge)   │
│  Description courte │
│  [Liens contact]    │
└─────────────────────┘
```

### Styles de la Carte:
- **Bordure supérieure**: Bleue (#003DA5) - 5px
- **Effet au survol**: Lève la carte (translateY -15px)
- **Ombre**: Augmente au survol
- **Image**: Zoom au survol (scale 1.1)
- **Animation**: Entrée progressive avec délai échelonné

## 👥 Membres Configurés

### Direction Nationale (6 membres)
1. **Jean Kasongo** - Président
2. **Marie Mwangi** - Vice-Présidente
3. **Pierre Ndombe** - Secrétaire Général
4. **Antoine Kabila** - Trésorier
5. **Luc Mukanya** - Directeur Affaires Politiques
6. **Sophie Banda** - Directrice Communication

### Comités Régionaux (3 coordinateurs)
1. **Félix Mamba** - Coordinateur Kinshasa
2. **Grace Mukenge** - Coordinatrice Katanga
3. **Désiré Mwamba** - Coordinateur Kasai

### Secrétariat (2 responsables)
1. **Rachel Lubungo** - Responsable Administratif
2. **Olivier Katongo** - Responsable Communication

### Commissions Thématiques (4 responsables)
1. **Dr. Tshimanga** - Commission Éducation
2. **Dr. Kimbina** - Commission Santé
3. **Éric Mobutu** - Commission Économie
4. **Fabienne Nkodo** - Commission Environnement

### Mouvements Jeunesse (2 responsables)
1. **Kevin Mbuma** - Président Jeunesse
2. **Aïsha Traore** - Coordinatrice Femmes

## 📱 Responsive Design

### Desktop (>1200px)
- Grille 3 colonnes pour les cartes
- Toute la page visible sans scroll horizontal

### Tablet (768px - 1200px)
- Grille 2 colonnes
- Navigation adaptée

### Mobile (<768px)
- Grille 1 colonne
- Hamburger menu activé
- Spacing réduit

## 🔧 Personnalisation

### Ajouter un Nouveau Membre

```html
<div class="member-card">
    <div class="member-image no-image">
        <i class="fas fa-user-tie"></i>
    </div>
    <div class="member-info">
        <div class="member-name">NOM COMPLET</div>
        <div class="member-position">FONCTION</div>
        <div class="member-description">Description du rôle.</div>
        <div class="member-contact">
            <a href="tel:+243XXX" title="Téléphone"><i class="fas fa-phone"></i></a>
            <a href="mailto:xxx@dbc.org" title="Email"><i class="fas fa-envelope"></i></a>
        </div>
    </div>
</div>
```

### Ajouter une Image

Remplacez `<div class="member-image no-image"><i class="fas fa-user-tie"></i></div>` par:

```html
<div class="member-image">
    <img src="chemin/vers/photo.jpg" alt="NOM COMPLET">
</div>
```

## 🎨 Couleurs Utilisées

- **Primaire (Bleu)**: #003DA5
- **Accentue (Jaune)**: #FFD700
- **Accentue (Vert)**: #228B22
- **Foncé**: #001F5C
- **Clair**: #F5F5F5

## ✨ Animations

1. **Entrance**: Les cartes entrent progressivement avec un délai échelonné
2. **Hover sur carte**: Soulève la carte avec ombre accentuée
3. **Hover sur image**: Zoom 1.1x
4. **Hover sur liens contact**: Changement de couleur et translation Y

## 📊 Structure du Fichier

```
structure.html
├── Navigation (réutilisée de styles.css)
├── Section principale (class="structure-page")
│   ├── En-tête avec statistiques
│   ├── Direction Nationale (6 cartes)
│   ├── Assemblée Générale (1 section)
│   ├── Comités Régionaux (3 cartes)
│   ├── Secrétariat (2 cartes)
│   ├── Commissions Thématiques (4 cartes)
│   ├── Mouvements Jeunesse (2 cartes)
│   └── Hiérarchie Organisationnelle
├── Footer (réutilisé de styles.css)
└── Scripts (script.js)
```

## 🚀 Intégration

- La page est accessible via le menu "Structure" (pointeur: structure.html)
- Utilise les styles globaux de `styles.css`
- Utilise les scripts globaux de `script.js`
- Hérite de la navigation et du footer

## ✅ Checklist

- [x] Créer la page structure.html
- [x] Ajouter tous les membres avec informations
- [x] Implémenter le design des cartes
- [x] Ajouter les animations
- [x] Tester responsive design
- [x] Mettre à jour le menu
- [x] Mettre à jour config.json
- [ ] Ajouter les photos réelles des membres
- [ ] Ajouter les vrais numéros de téléphone/emails
- [ ] Tester tous les liens de contact

## 📞 Contacts Génériques

Tous les contacts sont actuellement fictifs et utilisent le format générique:
- Téléphone: +243912345678 + index
- Email: nom.prenom@dbc.org

À remplacer par les véritables coordonnées.
