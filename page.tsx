"use client";

import React, { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  UserRound,
  ArrowLeft,
  ExternalLink,
  QrCode,
  Filter,
  Share2,
  History,
  Speaker,
} from "lucide-react";

const ULAVAL_LOGO_SRC = "/universite-laval.png";

const seminars = [
  {
    id: "seminaire-1",
    date: "14 avril 2026",
    dateISO: "2026-04-14",
    time: "9h00",
    speaker: "Romain Bergeron",
    title: "Caractérisation d'une bactérie responsable de l'altération de la viande : Brochothrix thermosphacta",
    category: "Sciences animales",
    location: "Salle 3102, Pavillon Paul-Comtois",
    format: "Présentiel - En ligne",
    audience: "Étudiants, chercheurs, professionnels",
    image:
      "fond.jpg",
    description: `L’altération des produits carnés constitue un enjeu majeur pour l’industrie agroalimentaire, tant sur le plan économique qu’environnemental. Dans un contexte où la réduction du gaspillage alimentaire devient une priorité mondiale, il est essentiel de mieux comprendre les microorganismes impliqués dans la détérioration des aliments. Parmi eux, Brochothrix thermosphacta occupe une place centrale ; fréquemment retrouvée dans les viandes réfrigérées, elle est l’un des principaux agents responsables des odeurs indésirables et de la dégradation de la qualité organoleptique.

Membre de la famille des Listeriaceae, cette espèce présente plusieurs traits favorisant sa persistance : croissance à basse température, métabolisme adaptable selon l’oxygène disponible, production de composés volatils tels que l’acétone et le diacétyle, ainsi qu’une capacité variable à former des agrégats ou des biofilms. Malgré son importance, elle demeure étonnamment peu étudiée.

Le présent projet repose sur l’hypothèse d’une diversité génomique et phénotypique marquée au sein des souches de B. thermosphacta. Trois objectifs ont été poursuivis : (1) caractériser microbiologiquement 84 souches ; (2) analyser la diversité de ces souches présentant des phénotypes atypiques ; (3) développer une stratégie de modification génétique permettant de relier génotype et phénotype.

La caractérisation phénotypique (croissance, agrégation, antibiogrammes) a mis en évidence une forte variabilité inter-souches, suggérant l’existence de sous-groupes fonctionnels. L’analyse comparative des génomes révèle une structure globale relativement homogène, mais un module très diversifié, incluant plasmides, prophages et gènes accessoires. L’intégration des données phénotypiques et génomiques a permis d’identifier plusieurs déterminants potentiellement associés à différentes fonctions observées.

Cette approche a également conduit à la découverte d’un élément hybride phage-plasmide, jamais décrit auparavant chez B. thermosphacta, témoignant d’une plasticité génomique plus importante qu’anticipé.

Enfin, ces résultats ont servi de base au développement du premier outil de modification génétique chez cette espèce. L’évaluation de différents vecteurs plasmidiques et l’optimisation des conditions de transformation ont abouti à la mise au point d’un protocole d’électroporation fonctionnel, ouvrant la voie à des manipulations génétiques jusqu’ici impossibles.

En somme, ce travail apporte un éclairage nouveau sur la diversité et la dynamique évolutive de B. thermosphacta, et ouvre des perspectives innovantes pour limiter l’altération des produits carnés et contribuer à la réduction du gaspillage alimentaire.`,
    details: [
      "Etudiant : Romain Bergeron, Direction : Antony Vincent",
      "Organisation : Département des sciences animales",
      "Entrée libre",
      "Période de questions à la fin",
    ],
    Direction: "Antony Vincent",
  },
  {
    id: "seminaire-2",
    date: "14 avril 2026",
    dateISO: "2026-04-14",
    time: "10h30",
    speaker: "Fanny Botella",
    title: "Bactériophages de Brochothrix thermosphacta : isolement, caractérisation et mécanismes de résistance bactérienne",
    category: "Sciences animales",
    location: "Salle 3102, Pavillon Paul-Comtois",
    format: "Présentiel - En ligne",
    audience: "Étudiants, chercheurs, professionnels",
    image:
      "fond.jpg",
      description: `Brochothrix thermosphacta est une bactérie non pathogène, mais elle constitue l’un des 
principaux microorganismes d’altération des viandes et produits carnés réfrigérés, en particulier 
dans les produits emballés sous atmosphère modifiée. Son activité métabolique entraîne 
l’apparition rapide d’odeurs indésirables, des pertes économiques importantes et un impact 
environnemental notable lié au gaspillage alimentaire. Dans un contexte où l’antibiorésistance 
limite l’usage d’antimicrobiens classiques, l’exploration d’alternatives telles que les 
bactériophages devient essentielle. Pourtant, leurs interactions avec B. thermosphacta restent 
peu documentées.

L’hypothèse de ce projet est qu’il existe une diversité de mécanismes permettant à B. 
thermosphacta de se protéger contre les phages, et que ces mécanismes peuvent être révélés par 
une analyse combinant approches phénotypiques et génomiques. Les objectifs étaient (1) 
d’isoler et caractériser de nouveaux phages infectant B. thermosphacta et (2) d’explorer les 
mécanismes de défense bactérienne contre l’infection phagique.

Cinq phages représentatifs ont ainsi été caractérisés à l’aide d’approches morphologiques, 
génomiques, phénotypiques et cellulaires. La microscopie électronique à transmission a permis 
de déterminer la morphologie des particules virales. Le spectre d’hôte a été évalué par spot test 
sur 82 souches, révélant des spectres d’hôte très étroits. L’adsorption a été étudiée par 
fluorescence après coloration au SYBR Gold.

Des mutants insensibles (BIM) ont été produits en confrontant les souches hôtes aux phages. 
Ils ont été comparés à leur souche parentale par spot test, par fluorescence et par analyse 
génomique comparative afin d’identifier les éléments associés à l’acquisition de la résistance.

Ces résultats mettent en lumière la forte spécificité des phages de B. thermosphacta et révèlent 
la diversité des mécanismes de défense mobilisés par les souches hôtes.`,
      details: [ 
      "Etudiante : Fanny Botella,Direction : Antony Vincent",
      "Durée : 60 minutes",
      "Discussion ouverte à la fin",
      "Accessible sans inscription",
    ],
    Direction: "Antony Vincent",
  },
];

const ulaval = {
  red: "#D71920",
  redDark: "#A30F15",
  cream: "#FFF8F1",
  navy: "#111827",
};

const startOfToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const getSeminarDate = (seminar) => {
  const parsed = new Date(`${seminar.dateISO}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const isPastSeminar = (seminar) => {
  const seminarDate = getSeminarDate(seminar);
  if (!seminarDate) return false;
  return seminarDate < startOfToday();
};

const sortByDateAsc = (items) => {
  return [...items].sort((a, b) => {
    const dateA = getSeminarDate(a)?.getTime() ?? 0;
    const dateB = getSeminarDate(b)?.getTime() ?? 0;
    return dateA - dateB;
  });
};

const sortByDateDesc = (items) => {
  return [...items].sort((a, b) => {
    const dateA = getSeminarDate(a)?.getTime() ?? 0;
    const dateB = getSeminarDate(b)?.getTime() ?? 0;
    return dateB - dateA;
  });
};

const toICSDate = (date) => {
  const year = date.getUTCFullYear();
  const month = `${date.getUTCMonth() + 1}`.padStart(2, "0");
  const day = `${date.getUTCDate()}`.padStart(2, "0");
  const hours = `${date.getUTCHours()}`.padStart(2, "0");
  const minutes = `${date.getUTCMinutes()}`.padStart(2, "0");
  const seconds = `${date.getUTCSeconds()}`.padStart(2, "0");
  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
};

const escapeICS = (value) => {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
};

const parseTimeRange = (timeRange) => {
  const [startRaw, endRaw] = timeRange.split(" - ").map((item) => item.trim());

  const parsePart = (value) => {
    const [hours, minutes] = value.split("h");
    return {
      hours: Number.parseInt(hours, 10),
      minutes: Number.parseInt(minutes || "0", 10),
    };
  };

  return {
    start: parsePart(startRaw),
    end: parsePart(endRaw),
  };
};

const downloadCalendarFile = (seminar) => {
  const baseDate = getSeminarDate(seminar);
  if (!baseDate) return;

  const { start, end } = parseTimeRange(seminar.time);
  const startDate = new Date(baseDate);
  startDate.setHours(start.hours, start.minutes, 0, 0);

  const endDate = new Date(baseDate);
  endDate.setHours(end.hours, end.minutes, 0, 0);

  const descriptionParts = [seminar.summary, seminar.description, ...seminar.details];
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ULaval FSAA//Portail Seminaires//FR",
    "BEGIN:VEVENT",
    `UID:${seminar.id}@fsaa.ulaval.ca`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(startDate)}`,
    `DTEND:${toICSDate(endDate)}`,
    `SUMMARY:${escapeICS(seminar.title)}`,
    `DESCRIPTION:${escapeICS(descriptionParts.join("\n\n"))}`,
    `LOCATION:${escapeICS(seminar.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${seminar.id}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

function BrandLogos() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <img
          src={ULAVAL_LOGO_SRC}
          alt="Université Laval"
          className="h-10 w-auto object-contain"
        />
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Faculté
          </p>
          <p className="text-sm font-bold leading-tight text-slate-900">
            Faculté des sciences de l’agriculture et de l’alimentation
          </p>
        </div>
      </div>
    </div>
  );
}

function SeminarCard({ seminar, onOpen, isArchived = false }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(seminar.id)}
      className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={seminar.image}
          alt={seminar.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {isArchived ? (
          <div className="absolute left-4 top-4 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            Déjà passé
          </div>
        ) : null}
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            {seminar.category}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {seminar.format}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-tight text-slate-900">{seminar.title}</h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{seminar.summary}</p>

        <div className="mt-5 space-y-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>{seminar.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            <span>{seminar.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <UserRound className="h-4 w-4" />
            <span>{seminar.speaker}</span>
          </div>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-700">
          Voir les détails <ExternalLink className="h-4 w-4" />
        </div>
      </div>
    </button>
  );
}

function DetailRow({ icon, label, value }) {
  const Icon = icon;
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-red-50 p-3 text-red-700">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
          <p className="mt-1 text-sm font-medium leading-6 text-slate-800">{value}</p>
        </div>
      </div>
    </div>
  );
}

function SeminarsGrid({ items, onOpen, emptyText, archived = false }) {
  if (items.length === 0) {
    return (
      <div className="rounded-[30px] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 shadow-sm">
        {emptyText}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
      {items.map((seminar) => (
        <SeminarCard
          key={seminar.id}
          seminar={seminar}
          onOpen={onOpen}
          isArchived={archived}
        />
      ))}
    </div>
  );
}

function HomePage({ seminars, search, setSearch, category, setCategory, onOpen, onOpenArchive }) {
  const categories = useMemo(
    () => ["Tous", ...new Set(seminars.map((seminar) => seminar.category))],
    [seminars]
  );

  const upcomingSeminars = useMemo(
    () => sortByDateAsc(seminars.filter((seminar) => !isPastSeminar(seminar))),
    [seminars]
  );

  const archivedSeminars = useMemo(
    () => sortByDateDesc(seminars.filter((seminar) => isPastSeminar(seminar))),
    [seminars]
  );

  const filteredUpcoming = useMemo(() => {
    const normalized = search.trim().toLowerCase();

    return upcomingSeminars.filter((seminar) => {
      const matchesCategory = category === "Tous" || seminar.category === category;
      const matchesSearch =
        normalized.length === 0 ||
        seminar.title.toLowerCase().includes(normalized) ||
        seminar.speaker.toLowerCase().includes(normalized) ||
        seminar.summary.toLowerCase().includes(normalized) ||
        seminar.date.toLowerCase().includes(normalized);

      return matchesCategory && matchesSearch;
    });
  }, [upcomingSeminars, search, category]);

  const featured = upcomingSeminars[0] || archivedSeminars[0] || null;

  return (
    <div>
      <section
        className="overflow-hidden rounded-[36px] border border-red-100 text-white shadow-xl"
        style={{
          background: `linear-gradient(135deg, ${ulaval.red} 0%, ${ulaval.redDark} 55%, ${ulaval.navy} 100%)`,
        }}
      >
        <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1.3fr_0.8fr] lg:items-center">
          <div>
            <BrandLogos />

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              <QrCode className="h-4 w-4" />
              Portail QR des séminaires
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              Toute la programmation des séminaires de la FSAA - Sciences animales
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
              Découvrez les séminaires
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => featured && onOpen(featured.id)}
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:opacity-90"
              >
                Voir le séminaire en vedette
              </button>
              <button
                type="button"
                onClick={onOpenArchive}
                className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Voir les séminaires passés
              </button>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/15 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              En vedette
            </p>
            {featured ? (
              <div className="mt-4 rounded-[24px] bg-white p-5 text-slate-900 shadow-lg">
                <p className="text-sm font-semibold text-red-700">{featured.date}</p>
                <h2 className="mt-2 text-2xl font-bold leading-tight">{featured.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{featured.summary}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <UserRound className="h-4 w-4" />
                    <span>{featured.speaker}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{featured.location}</span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_2fr]">
        <aside className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
            <Filter className="h-4 w-4" />
            Recherche et filtres
          </div>

          <div className="mt-5 space-y-4">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher un titre, une date, un intervenant..."
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:bg-white"
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:bg-white"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 rounded-[24px] bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">Comment ça fonctionne ?</p>
            <div className="mt-3 space-y-3 text-sm leading-6 text-amber-900/80">
              <p>1. Scanner le code QR affiché.</p>
              <p>2. Parcourir les séminaires à venir.</p>
              <p>3. Consulter l’onglet des séminaires passés au besoin.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenArchive}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-[24px] border border-slate-300 bg-slate-900 px-5 py-4 text-sm font-semibold text-white transition hover:opacity-95"
          >
            <History className="h-4 w-4" />
            Ouvrir les séminaires passés
          </button>
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">Programmation</p>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Séminaires à venir</h2>
            </div>
            <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              {filteredUpcoming.length} résultat{filteredUpcoming.length > 1 ? "s" : ""}
            </div>
          </div>

          <SeminarsGrid
            items={filteredUpcoming}
            onOpen={onOpen}
            emptyText="Aucun séminaire à venir ne correspond à votre recherche."
          />
        </div>
      </section>
    </div>
  );
}

function ArchivePage({ seminars, search, setSearch, category, setCategory, onOpen, onBackHome }) {
  const categories = useMemo(
    () => ["Tous", ...new Set(seminars.map((seminar) => seminar.category))],
    [seminars]
  );

  const archivedSeminars = useMemo(
    () => sortByDateDesc(seminars.filter((seminar) => isPastSeminar(seminar))),
    [seminars]
  );

  const filteredArchived = useMemo(() => {
    const normalized = search.trim().toLowerCase();

    return archivedSeminars.filter((seminar) => {
      const matchesCategory = category === "Tous" || seminar.category === category;
      const matchesSearch =
        normalized.length === 0 ||
        seminar.title.toLowerCase().includes(normalized) ||
        seminar.speaker.toLowerCase().includes(normalized) ||
        seminar.summary.toLowerCase().includes(normalized) ||
        seminar.date.toLowerCase().includes(normalized);

      return matchesCategory && matchesSearch;
    });
  }, [archivedSeminars, search, category]);

  return (
    <div>
      <section className="rounded-[36px] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                <History className="h-4 w-4" />
                Archives des séminaires
              </div>
              <h1 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
                Séminaires déjà passés
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                Cette section regroupe tous les séminaires déjà tenus. Ils ne s’affichent plus sur
                la page d’accueil, mais restent accessibles ici avec leur résumé et leurs détails.
              </p>
            </div>

            <button
              type="button"
              onClick={onBackHome}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux séminaires à venir
            </button>
          </div>
        </div>

        <div className="grid gap-6 p-8 md:p-10 lg:grid-cols-[0.95fr_2fr]">
          <aside className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              <Filter className="h-4 w-4" />
              Recherche dans les archives
            </div>

            <div className="mt-5 space-y-4">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher dans les séminaires passés..."
                  className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500"
                />
              </div>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-red-500"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 rounded-[24px] bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">Pourquoi garder les archives ?</p>
              <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                <p>• Permettre aux visiteurs de retrouver un ancien sujet.</p>
                <p>• Conserver le résumé et les informations des conférences passées.</p>
                <p>• Donner une vue d’ensemble des thématiques déjà abordées.</p>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">Archives</p>
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  Séminaires déjà tenus
                </h2>
              </div>
              <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                {filteredArchived.length} résultat{filteredArchived.length > 1 ? "s" : ""}
              </div>
            </div>

            <SeminarsGrid
              items={filteredArchived}
              onOpen={onOpen}
              archived
              emptyText="Aucun séminaire passé ne correspond à votre recherche."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SeminarDetailPage({ seminar, onBack, onOpen }) {
  const related = seminars.filter(
    (item) => item.category === seminar.category && item.id !== seminar.id
  );
  const archived = isPastSeminar(seminar);

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </button>

      <section className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-[1.6fr_0.4fr]">
          <div className="p-8 md:p-10">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                {seminar.category}
              </span>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                {seminar.format}
              </span>
              {archived ? (
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                  Séminaire passé
                </span>
              ) : null}
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              {seminar.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">{seminar.summary}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <DetailRow icon={CalendarDays} label="Date" value={seminar.date} />
              <DetailRow icon={Clock3} label="Heure" value={seminar.time} />
              <DetailRow icon={MapPin} label="Lieu" value={seminar.location} />
              <DetailRow icon={UserRound} label="Conférencier·ère" value={seminar.speaker} />
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_0.2fr]">
              <div>
                <h2 className="text-xl font-bold text-slate-900">À propos du séminaire</h2>
               <p className="mt-4 text-[17px] leading-8 text-slate-700 text-justify max-w-none whitespace-pre-line">
  {seminar.description}
</p>
<div className="mt-8">
  <h3 className="text-lg font-bold text-slate-900">Informations supplémentaires</h3>
<div className="mt-4 grid gap-4 md:grid-cols-3">
  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3">
    <p className="text-xs font-bold uppercase tracking-wide text-black">Direction</p>
    <p className="mt-1 text-sm font-medium text-slate-800">{seminar.Direction}</p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3">
    <p className="text-xs font-bold uppercase tracking-wide text-black">Format</p>
    <p className="mt-1 text-sm font-medium text-slate-800">{seminar.format}</p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3">
    <p className="text-xs font-bold uppercase tracking-wide text-black">Public</p>
    <p className="mt-1 text-sm font-medium text-slate-800">{seminar.audience}</p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3">
    <p className="text-xs font-bold uppercase tracking-wide text-black">Organisation</p>
    <p className="mt-1 text-sm font-medium text-slate-800">Département des sciences animales</p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3">
    <p className="text-xs font-bold uppercase tracking-wide text-black">Accès</p>
    <p className="mt-1 text-sm font-medium text-slate-800">Entrée libre</p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3">
    <p className="text-xs font-bold uppercase tracking-wide text-black">Discussion</p>
    <p className="mt-1 text-sm font-medium text-slate-800">Période de questions à la fin</p>
  </div>
</div>


  <div className="mt-6 space-y-3">
    {!archived ? (
      <button
  type="button"
  onClick={() => downloadCalendarFile(seminar)}
  className="flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
  style={{ backgroundColor: ulaval.red }}
>
  <CalendarDays className="h-4 w-4" />
  Ajouter au calendrier
</button>
    ) : null}

    <button
      type="button"
      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
    >
      <Share2 className="h-4 w-4" />
      Partager ce séminaire
    </button>
  </div>
</div>
                
              </div>

              
            </div>
          </div>

          <div className="min-h-[320px] bg-slate-100 lg:min-h-full">
            <img src={seminar.image} alt={seminar.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-10">
          <div className="mb-5">
            <p className="text-sm font-medium text-slate-500">Dans la même thématique</p>
            <h2 className="text-2xl font-bold text-slate-900">Autres séminaires liés</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <SeminarCard
                key={item.id}
                seminar={item}
                onOpen={onOpen}
                isArchived={isPastSeminar(item)}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default function SeminarPortal() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedId, setSelectedId] = useState(seminars[0]?.id ?? null);

  const upcomingSeminars = useMemo(
    () => sortByDateAsc(seminars.filter((seminar) => !isPastSeminar(seminar))),
    []
  );

  const defaultSeminar = upcomingSeminars[0] || seminars[0] || null;

  const selectedSeminar = useMemo(
    () => seminars.find((seminar) => seminar.id === selectedId) || defaultSeminar,
    [selectedId, defaultSeminar]
  );

  const openSeminar = (id) => {
    setSelectedId(id);
    setCurrentPage("detail");
  };

  const goHome = () => {
    setSearch("");
    setCategory("Tous");
    setCurrentPage("home");
  };

  const goArchive = () => {
    setSearch("");
    setCategory("Tous");
    setCurrentPage("archive");
  };

  const backFromDetail = () => {
    if (selectedSeminar && isPastSeminar(selectedSeminar)) {
      setCurrentPage("archive");
      return;
    }
    setCurrentPage("home");
  };

  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        background: `linear-gradient(180deg, ${ulaval.cream} 0%, #ffffff 18%, #f8fafc 100%)`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:py-10">
        <header className="mb-8 flex flex-col gap-4 rounded-[30px] border border-slate-200 bg-white/90 px-6 py-5 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
  <div className="space-y-4">
    <BrandLogos />

    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-700">
        Université Laval
      </p>

      <p className="text-lg font-extrabold leading-tight text-slate-900">
        Faculté des sciences de l’agriculture et de l’alimentation
      </p>

      <p className="text-sm font-semibold text-red-700">
        Sciences animales · Séminaires
      </p>
    </div>
  </div>
        

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={goHome}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                currentPage === "home"
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              Séminaires à venir
            </button>
            <button
              type="button"
              onClick={goArchive}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                currentPage === "archive"
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              Séminaires passés
            </button>
            <button
              type="button"
              onClick={() => selectedSeminar && openSeminar(selectedSeminar.id)}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                currentPage === "detail"
                  ? "text-white"
                  : "border border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
              }`}
              style={currentPage === "detail" ? { backgroundColor: ulaval.red } : undefined}
            >
              Fiche détaillée
            </button>
          </div>
        </header>

        {currentPage === "home" ? (
          <HomePage
            seminars={seminars}
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            onOpen={openSeminar}
            onOpenArchive={goArchive}
          />
        ) : currentPage === "archive" ? (
          <ArchivePage
            seminars={seminars}
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            onOpen={openSeminar}
            onBackHome={goHome}
          />
        ) : selectedSeminar ? (
          <SeminarDetailPage
            seminar={selectedSeminar}
            onBack={backFromDetail}
            onOpen={openSeminar}
          />
        ) : (
          <div className="rounded-[30px] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 shadow-sm">
            Aucun séminaire disponible pour le moment.
          </div>
        )}
      </div>
    </div>
  );
}
