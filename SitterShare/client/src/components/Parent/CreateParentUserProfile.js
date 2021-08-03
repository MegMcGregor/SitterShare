export const CreateParentUserProfile = () => {

    return (
        <form>
            <FormGroup>
                <Label htmlFor="firstName">first name</Label>
                <Input id="firstName" type="text" autoFocus onChange={e => setFirstName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="firstName">last name</Label>
                <Input id="lastName" type="text" autoFocus onChange={e => setLastName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="address">address</Label>
                <Input id="address" type="text" autoFocus onChange={e => setAddress(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="city">city</Label>
                <Input id="city" type="text" autoFocus onChange={e => setCity(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="state">state</Label>
                <Input id="state" type="text" autoFocus onChange={e => setState(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="zipcode">zipcode</Label>
                <Input id="zipcode" type="text" autoFocus onChange={e => setZipcode(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="numberOfKids">number of kids</Label>
                <Input id="numberOfKids" type="number" autoFocus onChange={e => setNumberOfKids(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="phone">phone number</Label>
                <Input id="phone" type="text" autoFocus onChange={e => setPhone(e.target.value)} />
            </FormGroup>
        </form>
    )