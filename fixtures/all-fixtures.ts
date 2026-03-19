import { mergeTests } from '@playwright/test';
import { test as pageTest } from './pages.fixture';
import { test as userTest } from './user.fixtures';

export const test = mergeTests(pageTest, userTest);

export { expect } from '@playwright/test';