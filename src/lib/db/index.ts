/**
 * Database client architecture preparation module.
 * Direct Prisma client instance will be exported from here once schema.prisma is initialized.
 */

export const db = {
  // Placeholder database client wrapper to isolate DB access from UI components
  isInitialized: false,
};
