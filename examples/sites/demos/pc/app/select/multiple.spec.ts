import { expect, test } from '@playwright/test'

test('多选时取远端数据与当前已选数据的并集', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#multiple')
  const wrap = page.locator('#multiple')
  const select = wrap.locator('.tiny-select').nth(0)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const tag = select.locator('.tiny-tag')

  await expect(tag).toHaveCount(2)
  await select.locator('.tiny-input__suffix').nth(0).click()
  await option.filter({ hasText: '全部' }).click()
  await expect(tag).toHaveCount(7)
  await option.filter({ hasText: '全部' }).click()
  await expect(tag).toHaveCount(2)
  await option.filter({ hasText: '北京' }).click()
  await expect(tag).toHaveCount(2)
  await option.filter({ hasText: '上海' }).click()
  await expect(tag).toHaveCount(2)
  await option.filter({ hasText: '天津' }).click()
  await expect(tag).toHaveCount(3)
  await tag.filter({ hasText: '天津' }).locator('.tiny-tag__close').click()
  await expect(tag).toHaveCount(2)
})

test('multiple-limit', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#multiple')
  const wrap = page.locator('#multiple')
  const select = wrap.locator('.tiny-select').nth(3)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const tag = select.locator('.tiny-tag')

  await select.click()
  await option.nth(0).click()
  await option.nth(1).click()
  await option.nth(2).click()
  await expect(tag).toHaveCount(2)
  await expect(option.filter({ hasText: '全部' })).toHaveCount(0)

  const list = await option.all()
  await expect(list[0]).toHaveClass(/selected hover is-required/)
  await expect(list[1]).toHaveClass(/is-disabled/)
  await expect(list[2]).toHaveClass(/selected/)
  await expect(list[3]).toHaveClass(/is-disabled/)
  await expect(list[4]).toHaveClass(/is-disabled/)
  await expect(list[5]).toHaveClass(/is-disabled/)
  await expect(list[6]).toHaveClass(/is-disabled/)
})
