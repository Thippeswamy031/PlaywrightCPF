export class OwnerPage {

   constructor(page) {
    this.page = page;
    this.createNewButton = page.getByRole('button', { name: 'Create New' });
    this.newOwner = page.getByText('New Owner');
    this.ownerNameInput = page.locator("//input[@name='name']");
    this.ownerContactInput = page.locator("//input[@name='contact']");
    this.ownerEmailInput = page.locator("//input[@name='email']");
    this.ownerPhoneInput = page.locator("//input[@name='phone']");
    this.ownerAddressInput = page.locator("//input[@name='streetAddress']");
    this.ownerCityInput = page.locator("//input[@name='city']");
    this.ownerStateInput = page.locator("//input[@name='state']");
    this.ownerZipCodeInput = page.locator("//input[@name='postalCode']");
    this.submit = page.getByRole('button', { name: 'Submit' });
   }

   async clickCreateNewButton() {
    await this.createNewButton.click();
   }

   async clickNewOwner() {
    await this.newOwner.click();
   }
   
   async fillOwnerName(name) {
    await this.ownerNameInput.fill(name);
   } 
   
   async fillOwnerContact(contact) {
    await this.ownerContactInput.fill(contact);
   }

   async fillOwnerEmail(email) {
    await this.ownerEmailInput.fill(email);
    }
    
    async fillOwnerPhone(phone) {
        // await expect(this.ownerPhoneInput).toBeVisible();
        // await expect(this.ownerPhoneInput).toBeEnabled();
        await this.ownerPhoneInput.fill(phone);
    }

    async fillOwnerAddress(address) {
        // await expect(this.ownerAddressInput).toHaveAttribute('placeholder', '1234 Main St.');
        await this.ownerAddressInput.fill(address);
    }  
    
    async fillOwnerCity(city) {
        await this.ownerCityInput.fill(city);
    }

    async fillOwnerState(state) {
        await this.ownerStateInput.fill(state);
    }

    async fillOwnerZipCode(zipCode) {
        await this.ownerZipCodeInput.fill(zipCode);
    }
    
    async clickSubmit() {
        await this.submit.click();
    }   
}