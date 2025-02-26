import { GetServerSideProps } from 'next';
interface Contact {
    _id: string;
    Name: string;
    Email: string;
    Phone: string;
    Message: string;
}

interface Props {
    contacts: Contact[];
}

export default function ContactPage({ contacts }: Props) {
    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Contact Messages</h1>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                {contacts?.length ? (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                                    Phone
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                                    Message
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {contacts.map((contact) => (
                                <tr
                                    key={contact._id}
                                    className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r">
                                        {contact.Name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r">
                                        {contact.Email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r">
                                        {contact.Phone}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        {contact.Message}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center py-8 text-gray-500">
                        No messages found.
                    </div>
                )}
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {

        const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contacts`, {
            headers: {
                Cookie: context.req.headers.cookie || ''
            }
        });

        const response = await data.json();

        console.log(data)

        if (response.data && Array.isArray(response.data)) {
            return {
                props: {
                    contacts: response.data
                }
            };
        }

        return {
            redirect: {
                destination: '/admin',
                permanent: false,
            }
        };

    } catch (error) {
        console.error('Error fetching contacts:', error);

        return {
            redirect: {
                destination: '/admin',
                permanent: false,
            }
        };
    }
};