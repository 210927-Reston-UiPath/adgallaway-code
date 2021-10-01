Class Contact
   Property Name As string
   Property PhoneNumber As Integer
   Property EmailAddress As String
   Public Sub New(ByVal name as string, ByVal number as Integer, ByVal emailAddress as string)
        Me.Name = name
        Me.PhoneNumber = number
        ME.EmailAddress = emailAddress
    End sub
    Public Sub New()
        '* parameterless constructor
    End Sub


    Overrides Function ToString() As string
        return $"Name: {Me.Name} Number: {Me.PhoneNumber} Email: {Me.EmailAddress}"
    End Function

End Class