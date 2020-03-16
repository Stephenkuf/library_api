"use strict";
const Factory = use("Factory");
const Database = use("Database");

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
    await Database.raw("SET FOREIGN_KEY_CHECKS = 0;");
    await Database.truncate("authors");

    await Database.table("authors").insert([{}]);

    await Database.raw("SET FOREIGN_KEY_CHECKS = 1;");
  }
}

module.exports = UserSeeder;
