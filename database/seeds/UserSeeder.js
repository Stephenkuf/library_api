'use strict'
const Factory = use('Factory')
const Database = use('Database')


/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */



class UserSeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('authors')

    await Database
      .table('authors')
      .insert([{
          author_name: 'antimalarial combinations'
        },
        {
          author_name: 'antimalarial quinolines'
        },
        {
          author_name: 'Attention Deficit Hyperactivity Disorder (ADHD)'
        },
        {
          author_name: 'beta-lactamase inhibitors'
        },
        {
          author_name: 'macrolides'
        },
        {
          author_name: 'aminopenicillins'
        },
        {
          author_name: 'quinolones'
        },
        {
          author_name: 'benzodiazepines'
        },
        {
          author_name: 'narcotic analgesics'
        },
        {
          author_name: 'nonsteroidal anti-inflammatory drug (NSAID)'
        },
        {
          author_name: 'miscellaneous analgesics'
        },
        {
          author_name: 'narcotic analgesic combinations'
        },
        {
          author_name: 'calcium channel blockers'
        },
        {
          author_name: 'sulfonamides'
        },
        {
          author_name: 'ACE inhibitor'
        },
        {
          author_name: 'alpha- and beta-adrenergic agonists'
        },
        {
          author_name: 'macrolide antibiotics'
        },
        {
          author_name: 'nutraceutical products'
        },
        {
          author_name: 'folic acid'
        },
        {
          author_name: 'antibiotics / nitroimidazoles'
        },
        {
          author_name: 'antacids'
        },
        {
          author_name: 'vitamin and mineral combinations'
        },
        {
          author_name: 'vitamins'
        },
        {
          author_name: 'anticoagulant (blood thinner)'
        },
        {
          author_name: 'opioid pain medication'
        },
        {
          author_name: 'glucocorticoids'
        },
        {
          author_name: 'insulins'
        },
        {
          author_name: 'antidiarrheal agents'
        },
        {
          author_name: 'HMG CoA reductase inhibitors / statins'
        },
        {
          author_name: 'thiazide diuretic'
        },
        {
          author_name: 'antilipemic agents'
        },
        {
          author_name: 'sympathomimetic drug'
        },
        {
          author_name: 'proton pump inhibitors'
        },
        {
          author_name: 'H2 antagonists'
        },
        {
          author_name: 'GI stimulants / miscellaneous antiemetics'
        },
        {
          author_name: 'minerals and electrolytes'
        }
      ])

    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')

  }
}

module.exports = UserSeeder
