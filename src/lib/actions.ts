export function createPortal(element: HTMLElement, elName: string) {
	const modalSlot = document.getElementById(elName);

	modalSlot?.appendChild(element);

	return {
		destroy() {
			element.remove();
		}
	};
}
