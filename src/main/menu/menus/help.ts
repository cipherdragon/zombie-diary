/** @format */

import { MenuItemConstructorOptions, shell } from "electron";

import { translate } from "../../i18n/i18n";

const URL_LICENSE = "https://github.com/cipherdragon/zombie-diary/blob/master/LICENSE.md"

export default function getHelpMenu(): MenuItemConstructorOptions {
	return {
		label: translate("help"),
		role: "help",
		submenu: [
			{
				label: translate("license"),
				click(): void {
					shell.openExternal(URL_LICENSE);
				},
			},
		],
	};
}
