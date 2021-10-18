Imports System

Module Program
    Sub Main(args As String())
        dim repeat as Boolean = true
        Do While repeat
            Console.WriteLine("What would you like to do?")
            Console.WriteLine("[0] pet our cat")
            Console.WriteLine("[1] feed our cat")
            Console.WriteLine("[2] play with our cat")
            Console.WriteLine("[x] leave our cat")
            dim input as string = Console.ReadLine()
            Select Case input
                case "0"
                Console.WriteLine("purrrr")
                case "1"
                Console.WriteLine("num, num, num")
                case "2"
                Console.WriteLine("meow")
                case "x"
                Console.WriteLine("hiss")
                repeat = false
            End Select
        Loop
    End Sub
End Module
