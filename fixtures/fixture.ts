import { test as base, expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

export const test = base;
export { expect };

export const { Given, When, Then } = createBdd(test);